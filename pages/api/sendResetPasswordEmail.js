// pages/api/sendResetPasswordEmail.js
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

      // Настройка транспортера для отправки письма
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        }
      });

      const resetLink = `${url}/ResetPasswordForm?token=${token}&email=${email}`;

      const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: email,
        subject: 'Восстановление пароля',
        text: `Перейдите по следующей ссылке для сброса пароля: ${resetLink}`,
        html: `<p>Перейдите по следующей ссылке для сброса пароля: <a href="${resetLink}">Сбросить пароль</a></p>`
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Письмо отправлено' });
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при отправке письма' });
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' });
  }
};
