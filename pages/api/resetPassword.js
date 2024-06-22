import dbConnect from '../../lib/dbConnect';
import ResetToken from '../../models/ResetToken';
import User from '../../models/User';

export default async (req, res) => {
  await dbConnect(); // Connect to the database

  if (req.method === 'POST') {
    const { token, email, password } = req.body;

    try {
      const resetToken = await ResetToken.findOne({ email, token });

      if (!resetToken) {
        return res.status(400).json({ error: 'Invalid or expired token' });
      }

      // Update user password (without hashing for demonstration)
      await User.findOneAndUpdate({ email }, { password });

      // Delete the used token
      await ResetToken.findOneAndDelete({ email, token });

      res.status(200).json({ message: 'Password successfully reset' });
    } catch (error) {
      res.status(500).json({ error: 'Error resetting password' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
