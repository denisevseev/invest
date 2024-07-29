
import { MongoClient, ObjectId } from 'mongodb';

async function dbConnect() {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return client.db();
}

export default async function handler(req, res) {
    const { method } = req;

    const db = await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { userId, field, value } = req.body;

                if (!userId || !field || value === undefined) {
                    return res.status(400).json({ message: 'Invalid data' });
                }

                const result = await db.collection('users').updateOne(
                    { _id: new ObjectId(userId) },
                    { $set: { [field]: value } }
                );

                if (result.matchedCount === 0) {
                    return res.status(404).json({ message: 'User not found' });
                }

                const updatedUser = await db.collection('users').findOne({ _id: new ObjectId(userId) });
                console.log(req.body);

                res.status(200).json({ message: 'Field successfully updated', user: updatedUser });
            } catch (error) {
                console.error('Server error', error);
                res.status(500).json({ message: 'Server error', error });
            }
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
