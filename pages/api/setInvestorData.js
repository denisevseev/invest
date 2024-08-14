import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, investmentAmount, shareholdingPeriod } = req.body;

        try {
            await client.connect();
            const db = client.db('victorum-portal');
            const usersCollection = db.collection('users');
            const result = await usersCollection.updateOne(
                { email }, // Match the user by email
                {
                    $set: {
                        investmentAmount,
                        shareholdingPeriod,
                    },
                }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: 'User not found!!' });
            }

            return res.status(200).json({ message: 'Investment data updated successfully!' });
        } catch (error) {
            console.error('Error updating investment data:', error);
            res.status(500).json({ message: 'Internal server error' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).end();
    }
}
