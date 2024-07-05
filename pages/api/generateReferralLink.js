// pages/api/generateReferralLink.js
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import { nanoid } from 'nanoid';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { userId, role } = req.body;

        try {
            const referralCode = nanoid();
            await User.findByIdAndUpdate(userId, { referralCode, usedReferralCode: false });

            res.status(200).json({ referralCode });
        } catch (error) {
            console.error('Error generating referral link:', error);
            res.status(400).json({ message: 'Error generating referral link', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
