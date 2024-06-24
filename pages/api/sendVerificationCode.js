// pages/api/sendVerificationCode.js
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import { sendEmail } from '../../lib/sendEmail';
import { sendSMS } from '../../lib/sendSMS'; // Реализуйте эту функцию для отправки SMS
import { generateCode } from '../../lib/generateCode';

export default async function handler(req, res) {
  const { email, phoneNumber, type } = req.body;

  await dbConnect();

  let user = await User.findOne({ email, phoneNumber });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const verificationCode = generateCode();

  user.verificationCode = verificationCode;
  await user.save();

  try {
    if (type === 'email') {
      await sendEmail(user.email, verificationCode);
    } else if (type === 'phone') {
      await sendSMS(user.phoneNumber, verificationCode);
    }
    res.status(200).json({ message: 'Verification code sent' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send verification code' });
  }
}
