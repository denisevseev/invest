// pages/api/auth/registerInvestor.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {
            firstName,
            phoneNumber,
            email,
            password
        } = req.body;

        try {
            await client.connect();
            const db = client.db('victorum-portal');
            const usersCollection = db.collection('users');
            const existingUser = await usersCollection.findOne({ email });

            const updateData = {
                firstName,
                phoneNumber,
                email,
                password,
                role: 'investor'
            };

            if (existingUser) {
                // Обновление существующего пользователя
                await usersCollection.updateOne({ email }, { $set: updateData });
                return res.status(200).json({ message: 'User updated successfully!' });
            } else {
                // Создание нового пользователя
                await usersCollection.insertOne(updateData);
                return res.status(200).json({ message: 'User registered successfully!' });
            }
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ message: 'Internal server error' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).end();
    }
}
