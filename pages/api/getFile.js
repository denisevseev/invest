import { MongoClient, GridFSBucket } from 'mongodb';

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

export default async function handler(req, res) {
    const { filename } = req.query;

    if (!filename) {
        return res.status(400).json({ message: 'Filename is required' });
    }

    try {
        const db = await connectToDatabase();
        const bucket = new GridFSBucket(db, {
            bucketName: 'uploads',
        });

        const downloadStream = bucket.openDownloadStreamByName(filename);

        downloadStream.on('data', (chunk) => {
            res.write(chunk);
        });

        downloadStream.on('error', (error) => {
            console.error('Error in download stream:', error);
            res.status(500).json({ message: 'Error in download stream' });
        });

        downloadStream.on('end', () => {
            res.end();
        });
    } catch (error) {
        console.error('Error fetching file:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
