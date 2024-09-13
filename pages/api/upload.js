

import { MongoClient, GridFSBucket } from 'mongodb';
import { getSession } from 'next-auth/react';
import multer from 'multer';
import { Readable } from 'stream';

const uri = process.env.MONGODB_URI;
let cachedClient = null;

async function connectToDatabase() {
    if (!cachedClient) {
        cachedClient = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await cachedClient.connect();
    }
    return cachedClient.db('victorum-portal');
}

const storage = multer.memoryStorage();
const upload = multer({ storage }).array('files', 3);

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const email = session.user.email;

    await runMiddleware(req, res, upload);

    const db = await connectToDatabase();
    const bucket = new GridFSBucket(db, {
        bucketName: 'uploads',
    });

    try {
        const uploadPromises = req.files.map((file) => {
            return new Promise((resolve, reject) => {
                const readableStream = new Readable();
                readableStream.push(file.buffer);
                readableStream.push(null);

                const uploadStream = bucket.openUploadStream(file.originalname, {
                    metadata: {
                        email,
                        type: req.body.type, // Ensure the type is provided in the request body
                    },
                });

                readableStream.pipe(uploadStream)
                    .on('error', (error) => reject(error))
                    .on('finish', () => resolve());
            });
        });

        await Promise.all(uploadPromises);

        res.status(200).json({ message: 'Files uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading files:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
