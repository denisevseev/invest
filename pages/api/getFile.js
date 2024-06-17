import { MongoClient, GridFSBucket } from 'mongodb';
import { getSession } from 'next-auth/react';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToDatabase() {
    if (!client.topology || !client.topology.isConnected()) await client.connect();
    return client.db('victorum-portal');
}

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { filename } = req.query;

    try {
        const db = await connectToDatabase();
        const bucket = new GridFSBucket(db, {
            bucketName: 'uploads',
        });

        const downloadStream = bucket.openDownloadStreamByName(filename);

        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

        downloadStream.on('error', (error) => {
            console.error('Error in download stream:', error);
            res.status(500).json({ message: 'Error in download stream' });
        });

        downloadStream.on('file', () => {
            res.status(200);
        });

        downloadStream.pipe(res);
    } catch (error) {
        console.error('Error fetching file:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
