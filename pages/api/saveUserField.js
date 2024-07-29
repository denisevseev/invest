import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { userId, field, value } = req.body;

                if (!userId || !field || value === undefined) {
                    return res.status(400).json({ message: 'Invalid data' });
                }

                const user = await User.findById(userId);
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }

                user[field] = value;
                let result  = await user.save();
                console.log(req.body)

                res.status(200).json({ message: 'Field successfully updated', user });
            } catch (error) {
                res.status(500).json({ message: 'Server error', error });
            }
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
