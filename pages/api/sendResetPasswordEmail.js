import nodemailer from 'nodemailer';
import crypto from 'crypto';
import dbConnect from '../../lib/dbConnect';
import ResetToken from '../../models/ResetToken';

export default async (req, res) => {
  await dbConnect();

  if (req.method === 'POST') {
    const { email } = req.body;
    const url = process.env.NEXTAUTH_URL;

    // Генерация уникального токена
    const token = crypto.randomBytes(32).toString('hex');

    try {
      // Сохранение токена в базе данных
      await new ResetToken({ email, token }).save();
      console.log('Token saved');

      // Настройка транспортера для отправки письма
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      });
      // console.log('Transporter:', transporter);

      const resetLink = `${url}/ResetPasswordForm?token=${token}&email=${email}`;

      const mailOptions = {
        from: `"Victorum Capital Support" <${process.env.MAIL_USERNAME}>`,
        to: email,
        subject: 'Password Reset',
        text: `Please follow the link to reset your password: ${resetLink}`,
        html: `<p>Please follow the link to reset your password: <a href="${resetLink}">Reset Password</a></p>`,
      };

      // console.log('Mail options:', mailOptions);

      // Отправка письма
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
