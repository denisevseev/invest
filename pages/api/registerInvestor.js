// pages/api/registerInvestor.js
import dbConnect from './../../lib/dbConnect';
import User from './../../models/User';
// import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { firstName, lastName, email, password, phoneNumber, referralCode } = req.body;

        try {
            const employee = await User.findOne({ referralCode, role: 'employee' });

            if (!employee) {
                return res.status(400).json({ message: 'Invalid referral code' });
            }

            // const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                phoneNumber,
                role: 'investor',
                assignedTo: employee._id
            });

            await newUser.save();

            res.status(201).json({ message: 'Investor registered successfully' });
        } catch (error) {
            console.error('Error registering investor:', error);
            res.status(400).json({ message: 'Error registering investor', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
