import { MongoClient, GridFSBucket } from 'mongodb';
import { getToken } from 'next-auth/jwt';
import fs from 'fs';
import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDatabase() {
    if (!client.topology || !client.topology.isConnected()) {
        await client.connect();
    }
    return client.db('victorum-portal');
}

export const config = {
    api: {
        bodyParser: false,
    },
};

const streamToBuffer = (stream) => {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => {
            chunks.push(chunk);
        });
        stream.on('end', () => {
            resolve(Buffer.concat(chunks));
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
};

export default async function handler(req, res) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    if (!token) {
        console.error('Unauthorized request');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const email = token.email;  // Извлекаем email из токена

    try {
        const db = await connectToDatabase();
        const bucket = new GridFSBucket(db, {
            bucketName: 'uploads',
        });

        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' });
        }

        const buffers = await streamToBuffer(req);

        // Генерация уникального имени файла
        const uniqueFilename = `${uuidv4()}-uploaded-file`;

        const uploadStream = bucket.openUploadStream(uniqueFilename, {
            metadata: { email },
        });
        uploadStream.end(buffers);

        uploadStream.on('error', (error) => {
            console.error('Error uploading file:', error);
            return res.status(500).json({ message: 'Error uploading file' });
        });

        uploadStream.on('finish', () => {
            console.log('File uploaded successfully');
            res.status(200).json({ message: 'File uploaded successfully', filename: uniqueFilename });
        });

    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
