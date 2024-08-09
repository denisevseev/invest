import dbConnect from '../../lib/dbConnect';
import { getSession } from 'next-auth/react';
import User from '../../models/User';

export default async function handler(req, res) {
    console.log(req.body);

    await dbConnect();

    const { oldPassword, newPassword } = req.body;

    try {
        const user = await User.findById(req.body.user._id);

        if (user.password !== oldPassword) {
            return res.status(400).json({ message: 'Old password is incorrect' });
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
