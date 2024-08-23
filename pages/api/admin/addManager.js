import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, phoneNumber, firstName, lastName } = req.body;

  // Валидация входных данных
  if (!email || !password || !phoneNumber || !firstName || !lastName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Соединение с MongoDB
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();
    const usersCollection = db.collection('users');

    // Проверка существования пользователя с таким же email или номером телефона
    const existingUser = await usersCollection.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (existingUser) {
      client.close();
      return res.status(400).json({ message: 'User with this email or phone number already exists' });
    }

    // Создание нового пользователя
    const newUser = {
      email,
      password: password,
      phoneNumber,
      firstName,
      lastName,
      role: 'manager',
      emailVerified: false,
      phoneVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Вставка пользователя в базу данных
    const result = await usersCollection.insertOne(newUser);

    client.close();

    res.status(201).json({ message: 'Manager created successfully', userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating manager', error });
  }
}
