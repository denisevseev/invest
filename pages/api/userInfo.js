import { getSession } from 'next-auth/react';
import { MongoClient } from 'mongodb';
import fs from 'fs';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Функция для логгирования в файл
const logToFile = (message) => {
    const logFilePath = './api.log'; // Путь к файлу лога
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
};

export default async function handler(req, res) {
    const session = await getSession({ req });
    logToFile(JSON.stringify(session) + ' backend session');

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const email = session.user.email;

    try {
        await client.connect();
        const db = client.db('victorum-portal');
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ email });

        if (!user) {
            logToFile('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        logToFile('User found: ' + JSON.stringify(user));
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        logToFile('Error fetching user: ' + error.message);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        // await client.close();
    }
}
