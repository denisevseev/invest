// pages/api/admin/getUsersByRole.js
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    await dbConnect();

    try {
        const user = await User.findOne({ email: session.user.email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        let users = [];

        if (user.role === 'admin') {
            users = await User.find().populate('assignedTo').populate('assignedEmployees').populate('assignedInvestors').exec();
        } else if (user.role === 'manager') {
            const employees = await User.find({ assignedTo: user._id, role: 'employee' }).exec();
            const investors = await User.find({ assignedTo: { $in: employees.map(e => e._id) }, role: 'investor' }).exec();
            users = [...employees, ...investors];
        } else if (user.role === 'employee') {
            users = await User.find({ assignedTo: user._id, role: 'investor' }).exec();
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users by role:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
