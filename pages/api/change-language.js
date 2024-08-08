import { MongoClient, ObjectId } from 'mongodb';
import { getSession } from 'next-auth/react';

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
    // Get the session from the request
    // const session = await getSession({ req });
    //
    // // Дополнительная отладка
    // console.log('Session:', session);
    //
    // if (!session) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }

    const { user, language } = req.body;

    if (!user || !user._id) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db('victorum-portal'); // Replace with your database name
        const usersCollection = db.collection('users');

        // Дополнительная отладка
        console.log('Updating user:', user);
        console.log('New language:', language);

        const userDocument = await usersCollection.findOne({ _id: new ObjectId(user._id) });
        console.log('User document:', userDocument);

        if (!userDocument) {
            return res.status(404).json({ message: 'User not found' });
        }

        const result = await usersCollection.updateOne(
            { _id: new ObjectId(user._id) },
            { $set: { language } }
        );

        console.log('Update result:', result);

        if (result.modifiedCount === 1) {
            res.status(200).json({ message: 'Language updated successfully' });
        } else {
            res.status(400).json({ message: 'Failed to update language' });
        }
    } catch (error) {
        console.error('Error updating language:', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        await client.close();
    }
}
