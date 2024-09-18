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
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true для 465, false для других портов
        auth: {
          user: 'support@victorum-capital.com', // Логин для авторизации на SMTP сервере
          pass: 'ChghryXLe7JBHjtaJPiw', // Пароль для авторизации на SMTP сервере
        },
      });

      const resetLink = `${url}/ResetsPasswordForm?token=${token}&email=${email}`;

      const mailOptions = {
        from: '"Victorum Capital Support" <support@victorum-capital.com>',
        to: email,
        subject: 'Password Reset Request - Immediate Action Required',
        text: `Hello, 

It looks like you requested a password reset. Please follow the link below to reset your password:

${resetLink}

If you did not make this request, please ignore this email or contact our support team.

Best regards,
Victorum Capital Support Team`,
        html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p style="font-size: 16px; color: #555;">Hello,</p>
      <p style="font-size: 16px; color: #555;">
        We received a request to reset your password. Please click the button below to proceed:
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px;">Reset Password</a>
      </div>
      <p style="font-size: 16px; color: #555;">
        If you did not make this request, please ignore this email or contact our support team immediately.
      </p>
      <p style="font-size: 16px; color: #555;">Best regards,</p>
      <p style="font-size: 16px; color: #555; font-weight: bold;">Victorum Capital Support Team</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="font-size: 12px; color: #999; text-align: center;">
        If you’re having trouble clicking the button, copy and paste the link below into your web browser: <br>
        <a href="${resetLink}" style="color: #007bff;">${resetLink}</a>
      </p>
    </div>
  `,
      };


      console.log('Mail options:', mailOptions);

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
