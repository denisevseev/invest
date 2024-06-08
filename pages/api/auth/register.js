import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Получите URI из переменной окружения
const client = new MongoClient(uri);

export default async function handler(req, res) {
    console.log('!!!!');
    if (req.method === 'POST') {
        const { name, phone, email, password } = req.body;

        try {
            await client.connect();
            const db = client.db('victorum-portal'); // Используем имя базы данных из MONGODB_URI
            const usersCollection = db.collection('users'); // Используем имя коллекции 'users'

            // Проверка на существование пользователя с таким email
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: 'User with this email already exists' });
            }

            // Создание нового пользователя (без хеширования пароля)
            const result = await usersCollection.insertOne({
                name,
                phone,
                email,
                password, // Сохраняем пароль в чистом виде (НЕ ДЕЛАЙТЕ ЭТО В ПРОИЗВОДСТВЕННОЙ СРЕДЕ!)
            });

            // Ответ клиенту
            res.status(200).json({ message: 'User registered successfully!' });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ message: 'Internal server error' });
        } finally {
            await client.close(); // Закрываем подключение к MongoDB
        }
    } else {
        res.status(405).end(); // Метод не разрешен
    }
}