import dbConnect from '../../../lib/dbConnect'; // Убедитесь, что у вас есть файл dbConnect для подключения к MongoDB
import User from '../../../models/User'; // Модель пользователя

export default async function handler(req, res) {
    await dbConnect(); // Подключение к базе данных

    const { method } = req; // Определяем HTTP-метод
    const { userId } = req.query; // Получаем ID пользователя из запроса

    switch (method) {
        case 'PUT':
            // Обработка редактирования пользователя
            return handleEditUser(req, res, userId);

        case 'POST':
            // Обработка смены пароля
            return handleChangePassword(req, res, userId);

        case 'DELETE':
            // Обработка удаления пользователя
            return handleDeleteUser(req, res, userId);

        default:
            res.setHeader('Allow', ['PUT', 'POST', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}

// Функция для редактирования пользователя
async function handleEditUser(req, res, userId) {
    try {
        const { firstName, lastName, email, phoneNumber } = req.body;

        // Находим пользователя по ID и обновляем его поля
        const updatedUser = await User.findByIdAndUpdate(userId, {
            firstName,
            lastName,
            email,
            phoneNumber,
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating user' });
    }
}

// Функция для смены пароля
async function handleChangePassword(req, res, userId) {
    try {
        const { newPassword } = req.body;

        // Проверка пароля на длину и другие требования (при необходимости)
        if (!newPassword || newPassword.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        // Находим пользователя и обновляем его пароль
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Устанавливаем новый пароль (используем метод модели, если у вас есть хэширование паролей)
        user.password = newPassword; // Замените это на хэширование пароля, если требуется
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error changing password' });
    }
}

// Функция для удаления пользователя
async function handleDeleteUser(req, res, userId) {
    try {
        // Удаляем пользователя по его ID
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user' });
    }
}
