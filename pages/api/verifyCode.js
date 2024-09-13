import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI; // Убедитесь, что эта переменная окружения настроена
const MONGODB_DB = process.env.MONGODB_DB; // Название базы данных

let cachedClient = null;
let cachedDb = null;

// Функция для подключения к базе данных напрямую через MongoClient
async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req, res) {
  const { email, phoneNumber, verificationCode, type } = req.body;

  // Подключение к базе данных
  const { db } = await connectToDatabase();

  try {
    // Поиск пользователя по email и номеру телефона
    let user = await db.collection('users').findOne({ email, phoneNumber });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Проверка кода подтверждения
    if (user.verificationCode !== verificationCode) {
      return res.status(400).json({ error: 'Invalid verification code' });
    }

    // Обновление статуса подтверждения
    const updateFields = {};
    if (type === 'email') {
      updateFields.emailVerified = true;
    } else if (type === 'phone') {
      updateFields.phoneVerified = true;
    }

    // Очистка verificationCode и обновление пользователя
    await db.collection('users').updateOne(
        { email, phoneNumber },
        {
          $set: {
            ...updateFields,
            verificationCode: '',
          },
        }
    );

    // Возвращение успешного ответа
    res.status(200).json({ message: 'Verification successful' });
  } catch (error) {
    console.error('Error verifying code:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
