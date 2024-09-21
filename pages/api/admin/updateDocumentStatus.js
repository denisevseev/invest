import { MongoClient, ObjectId } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { investorId, fileId, approved } = req.body;

    if (!investorId || !fileId || typeof approved !== 'boolean') {
        return res.status(400).json({ message: 'Invalid request data' });
    }

    try {
        // Соединение с MongoDB
        const client = await MongoClient.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = client.db();
        const investorsCollection = db.collection('investors');

        // Поиск инвестора с конкретным файлом
        const result = await investorsCollection.updateOne(
            { _id: new ObjectId(investorId), "files._id": new ObjectId(fileId) },
            { $set: { "files.$.approved": approved } }
        );

        await client.close();

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Investor or file not found' });
        }

        return res.status(200).json({ message: 'File status updated successfully' });
    } catch (error) {
        console.error('Error updating file status:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
