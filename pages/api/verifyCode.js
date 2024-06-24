// pages/api/verifyCode.js
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  const { email, phoneNumber, verificationCode, type } = req.body;

  await dbConnect();

  let user = await User.findOne({ email, phoneNumber });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (user.verificationCode !== verificationCode) {
    return res.status(400).json({ error: 'Invalid verification code' });
  }

  if (type === 'email') {
    user.emailVerified = true;
  } else if (type === 'phone') {
    user.phoneVerified = true;
  }

  user.verificationCode = '';
  await user.save();

  res.status(200).json({ message: 'Verification successful' });
}
