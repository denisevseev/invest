import { MongoClient, GridFSBucket } from 'mongodb';
import { getSession } from 'next-auth/react';

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
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const email = session.user.email;

    try {
        const db = await connectToDatabase();
        const bucket = new GridFSBucket(db, {
            bucketName: 'uploads',
        });

        const files = await bucket.find({ 'metadata.email': email }).toArray();

        if (!files || files.length === 0) {
            return res.status(404).json({ message: 'No files found' });
        }

        res.status(200).json(files);
    } catch (error) {
        console.error('Error fetching user files:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
