import { MongoClient, GridFSBucket } from 'mongodb';
import { getToken } from 'next-auth/jwt';

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

export default async function handler(req, res) {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const email = token.email;  // Извлекаем email из токена
    const { filename } = req.body;

    if (!filename) {
        return res.status(400).json({ message: 'Filename is required' });
    }

    try {
        const db = await connectToDatabase();
        const bucket = new GridFSBucket(db, {
            bucketName: 'uploads',
        });

        const files = await bucket.find({ filename, 'metadata.email': email }).toArray();

        if (files.length === 0) {
            return res.status(404).json({ message: 'File not found' });
        }

        const file = files[0];
        await bucket.delete(file._id);

        res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
