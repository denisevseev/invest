// pages/api/registerEmployee.js
import dbConnect from './../../lib/dbConnect';
import User from './../../models/User';
// import { hash } from 'bcryptjs';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { firstName, lastName, email, password, phoneNumber, referralCode } = req.body;

        try {
            const manager = await User.findOne({ referralCode, role: 'manager', usedReferralCode: false });

            if (!manager) {
                return res.status(400).json({ message: 'Invalid or already used referral code' });
            }

            // const hashedPassword = await hash(password, 10);

            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                phoneNumber,
                role: 'employee',
                assignedTo: manager._id
            });

            await newUser.save();

            // Помечаем реферальный код как использованный
            manager.usedReferralCode = true;
            await manager.save();

            res.status(201).json({ message: 'Employee registered successfully' });
        } catch (error) {
            console.error('Error registering employee:', error);
            res.status(400).json({ message: 'Error registering employee', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
