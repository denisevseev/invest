import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching users', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
