import { MongoClient, ObjectId } from 'mongodb';

async function dbConnect() {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return client.db();
}

export default async function handler(req, res) {
    const { method } = req;

    const db = await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { userId, field, value } = req.body;

                if (!userId || !field || value === undefined) {
                    return res.status(400).json({ message: 'Invalid data' });
                }

                // Получаем текущие данные пользователя
                const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });

                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }

                // Проверяем, если поле - это firstName или lastName
                let updateFields = { [field]: value };
                if ((field === 'firstName' || field === 'lastName') && user[field] !== value) {
                    // Пользователь изменяет имя или фамилию
                    updateFields.updatedName = true;
                }

                // Обновляем пользователя
                const result = await db.collection('users').updateOne(
                    { _id: new ObjectId(userId) },
                    { $set: updateFields }
                );

                if (result.matchedCount === 0) {
                    return res.status(404).json({ message: 'User not found' });
                }

                const updatedUser = await db.collection('users').findOne({ _id: new ObjectId(userId) });
                console.log(req.body);

                res.status(200).json({ message: 'Field successfully updated', user: updatedUser });
            } catch (error) {
                console.error('Server error', error);
                res.status(500).json({ message: 'Server error', error });
            }
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}

