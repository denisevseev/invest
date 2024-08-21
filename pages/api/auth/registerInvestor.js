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
        console.log('Received data:', req.body);

        try {
            await client.connect();
            const db = client.db('victorum-portal');
            const usersCollection = db.collection('users');

            // Убедитесь, что индекс уникальности существует
            await usersCollection.createIndex({ email: 1 }, { unique: true });

            const existingUser = await usersCollection.findOne({ email });

            if (existingUser) {
                return res.status(409).json({ message: 'User with this email already exists.' });
            }

            const newUser = {
                firstName,
                phoneNumber,
                email,
                password,
                role: 'investor'
            };

            // Создание нового пользователя
            await usersCollection.insertOne(newUser);
            return res.status(200).json({ message: 'User registered successfully!' });

        } catch (error) {
            console.error('Error registering user:', error);
            if (error.code === 11000) {
                res.status(409).json({ message: 'Duplicate email detected.' });
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        } finally {
            await client.close();
        }
    } else {
        res.status(405).end();
    }
}
