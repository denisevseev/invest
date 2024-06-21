// pages/api/resetPassword.js
import dbConnect from '../../lib/dbConnect';
import ResetToken from '../../models/ResetToken';
import User from '../../models/User';

export default async (req, res) => {
  await dbConnect(); // Подключение к базе данных

  if (req.method === 'POST') {
    const { token, email, password } = req.body;

    try {
      const resetToken = await ResetToken.findOne({ email, token });

      if (!resetToken) {
        return res.status(400).json({ error: 'Недействительный или истекший токен' });
      }

      // Обновление пароля пользователя без хеширования
      await User.findOneAndUpdate({ email }, { password });

      // Удаление использованного токена
      await ResetToken.findOneAndDelete({ email, token });

      res.status(200).json({ message: 'Пароль успешно сброшен' });
    } catch (error) {
      res.status(500).json({ error: 'Ошибка при сбросе пароля' });
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' });
  }
};
