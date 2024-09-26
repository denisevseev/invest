// pages/api/admin/searchUsers.js
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    await dbConnect();

    const { searchTerm } = req.query; // Получаем поисковый запрос из query параметра
    const searchRegex = new RegExp(searchTerm, 'i'); // Создаем регулярное выражение для поиска (без учета регистра)

    try {
        const currentUser = await User.findOne({ email: session.user.email });

        if (!currentUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        let users = [];

        // Поиск для администратора (видит всех)
        if (currentUser.role === 'admin') {
            users = await User.find({
                $or: [
                    { firstName: searchRegex },
                    { lastName: searchRegex },
                    { email: searchRegex },
                    { phoneNumber: searchRegex }
                ]
            }).populate('assignedEmployees assignedInvestors').exec();
        }

        // Поиск для менеджера (видит только своих сотрудников и инвесторов)
        else if (currentUser.role === 'manager') {
            const employees = await User.find({
                assignedTo: currentUser._id,
                role: 'employee',
                $or: [
                    { firstName: searchRegex },
                    { lastName: searchRegex },
                    { email: searchRegex },
                    { phoneNumber: searchRegex }
                ]
            }).exec();

            const employeeIds = employees.map(e => e._id);

            const investors = await User.find({
                assignedTo: { $in: employeeIds },
                role: 'investor',
                $or: [
                    { firstName: searchRegex },
                    { lastName: searchRegex },
                    { email: searchRegex },
                    { phoneNumber: searchRegex }
                ]
            }).exec();

            users = [...employees, ...investors];
        }

        // Поиск для сотрудника (видит только своих инвесторов)
        else if (currentUser.role === 'employee') {
            users = await User.find({
                assignedTo: currentUser._id,
                role: 'investor',
                $or: [
                    { firstName: searchRegex },
                    { lastName: searchRegex },
                    { email: searchRegex },
                    { phoneNumber: searchRegex }
                ]
            }).exec();
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Error searching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
