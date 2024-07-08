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

    const email = session.user.email;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    await dbConnect();

    try {
        const db = await connectToDatabase();
        const bucket = new GridFSBucket(db, {
            bucketName: 'uploads',
        });

        let investors;
        if (user.role === 'admin') {
            investors = await User.find({ role: 'investor' }).lean();
        } else if (user.role === 'manager') {
            const employees = await User.find({ assignedTo: user._id });
            const employeeIds = employees.map(emp => emp._id);
            investors = await User.find({ assignedTo: { $in: employeeIds } }).lean();
        } else if (user.role === 'employee') {
            investors = await User.find({ assignedTo: user._id }).lean();
        } else {
            return res.status(403).json({ message: 'Forbidden' });
        }

        const files = await bucket.find({}).toArray();

        const investorsWithFiles = investors.map(investor => {
            investor.files = files.filter(file => file.metadata?.email === investor.email);
            return investor;
        });

        res.status(200).json(investorsWithFiles);
    } catch (error) {
        console.error('Error fetching investors and files:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
