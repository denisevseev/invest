// pages/api/admin/getInvestors.js
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'GET') {
        const { employeeId } = req.query;

        if (!employeeId) {
            return res.status(400).json({ message: 'Employee ID is required' });
        }

        try {
            const investors = await User.find({ assignedTo: employeeId, role: 'investor' });
            res.status(200).json(investors);
        } catch (error) {
            res.status(400).json({ message: 'Error fetching investors', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
