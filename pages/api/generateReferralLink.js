import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import { nanoid } from 'nanoid';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { userId, role, linkType } = req.body;

        try {
            // Generate referral code
            const referralCode = nanoid();

            // Update based on link type (employee or investor)
            if (linkType === 'employee') {
                await User.findByIdAndUpdate(userId, { referralCode, usedReferralCode: false });
            } else if (linkType === 'investor') {
                await User.findByIdAndUpdate(userId, { referralCode, usedReferralCode: false });
            }

            res.status(200).json({ referralCode });
        } catch (error) {
            console.error('Error generating referral link:', error);
            res.status(400).json({ message: 'Error generating referral link', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
