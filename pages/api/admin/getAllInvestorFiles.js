// pages/api/admin/getAllInvestorFiles.js
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { MongoClient, GridFSBucket } from 'mongodb';
import { getSession } from 'next-auth/react';

const uri = process.env.MONGODB_URI;
let cachedClient = null;

async function connectToDatabase() {
    if (!cachedClient) {
        cachedClient = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await cachedClient.connect();
    }
    return cachedClient.db('victorum-portal');
}

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Проверяем, является ли пользователь администратором
    const user = await User.findOne({ email: session.user.email });

    if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden' });
    }

    await dbConnect();

    if (req.method === 'GET') {
        try {
            const db = await connectToDatabase();
            const bucket = new GridFSBucket(db, {
                bucketName: 'uploads',
            });

            // Получаем всех инвесторов
            const investors = await User.find({ role: 'investor' }).lean();

            // Получаем все файлы для инвесторов
            const files = await bucket.find({}).toArray();

            // Присоединяем файлы к соответствующим инвесторам
            const investorsWithFiles = investors.map(investor => {
                investor.files = files.filter(file => file.metadata?.email === investor.email);
                return investor;
            });

            res.status(200).json(investorsWithFiles);
        } catch (error) {
            console.error('Error fetching investors and files:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
