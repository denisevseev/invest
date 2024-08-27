// pages/api/registerEmployee.js
import { MongoClient, ObjectId } from 'mongodb';
import dbConnect from './../../lib/dbConnect';

export default async function handler(req, res) {
    // Подключение к базе данных
    await dbConnect();
    
    const uri = process.env.MONGODB_URI;  // Убедитесь, что ваш URI базы данных правильный

    if (req.method === 'POST') {
        const { firstName, lastName, email, password, phoneNumber, nationality, referralCode } = req.body;

        // Логирование данных для отладки
        console.log('Received data:', { firstName, lastName, email, password, phoneNumber, nationality, referralCode });

        try {
            const client = await MongoClient.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            const db = client.db();  // Подключаемся к базе данных
            const usersCollection = db.collection('users');  // Получаем коллекцию

            // Найти менеджера по реферальному коду, который еще не был использован
            const manager = await usersCollection.findOne({ referralCode, role: 'manager', usedReferralCode: false });

            if (!manager) {
                client.close();
                return res.status(400).json({ message: 'Invalid or already used referral code' });
            }

            // Проверка, не существует ли пользователь с таким же email
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                client.close();
                return res.status(400).json({ message: 'User with this email already exists' });
            }

            // Создание нового пользователя
            const newUser = {
                firstName,
                lastName,
                email,
                password,  // В реальном приложении используйте хеширование паролей
                phoneNumber,
                nationality,
                role: 'employee',
                assignedTo: manager._id,  // Присвоить сотрудника менеджеру
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            // Вставка нового пользователя в коллекцию
            await usersCollection.insertOne(newUser);

            // Пометить реферальный код как использованный
            await usersCollection.updateOne({ _id: manager._id }, { $set: { usedReferralCode: true } });

            client.close();
            res.status(201).json({ message: 'Employee registered successfully' });
        } catch (error) {
            console.error('Error registering employee:', error);
            res.status(500).json({ message: 'Error registering employee', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
