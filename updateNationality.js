// Подключаемся к MongoDB и загружаем модель пользователя
const mongoose = require('mongoose');
const User = require('./models/User'); // Убедитесь, что путь к модели пользователя корректный

// URL подключения к базе данных MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

// Функция для обновления поля nationality
async function updateNationality(userId, newNationality) {
    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        const user = await User.findById(userId);
        if (!user) {
            console.log('User not found');
            return;
        }

        user.nationality = newNationality;
        await user.save();
        console.log('Nationality updated successfully:', user);
    } catch (error) {
        console.error('Error updating nationality:', error);
    } finally {
        mongoose.connection.close();
    }
}

// Вызов функции обновления с нужным значением
updateNationality('66a26f9ca867e033ea45257a', 'mos');
