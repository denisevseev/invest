import { MongoClient } from 'mongodb';
import { sendEmail } from '../../lib/sendEmail';
import { sendSMS } from '../../lib/sendSMS'; // Реализуйте эту функцию для отправки SMS
import { generateCode } from '../../lib/generateCode';

const MONGODB_URI = process.env.MONGODB_URI; // Убедитесь, что эта переменная настроена
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
  const { email, phoneNumber, type } = req.body;

  const { db } = await connectToDatabase();

  try {
    // Поиск пользователя по email и номеру телефона
    let user = await db.collection('users').findOne({ email, phoneNumber });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Генерация кода подтверждения
    const verificationCode = generateCode();

    // Обновление кода подтверждения в базе данных
    await db.collection('users').updateOne(
        { email, phoneNumber },
        { $set: { verificationCode } }
    );

    // Отправка кода по email или SMS
    if (type === 'email') {
      await sendEmail(user.email, verificationCode);
    } else if (type === 'phone') {
      let result = await sendSMS(user.phoneNumber, verificationCode);
      console.log('SMS result:', result);
      console.log('User phone number:', user.phoneNumber);
    }

    res.status(200).json({ message: 'Verification code sent' });
  } catch (error) {
    console.error('Error sending verification code:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
}
