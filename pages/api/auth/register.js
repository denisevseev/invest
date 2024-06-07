import mongoose from 'mongoose';
import User from '../../../models/User';

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB for signup');
}).catch(err => {
    console.error('Error connecting to MongoDB for signup:', err);
});

export default async function handler(req, res) {
    console.log('Signup request received');
    if (req.method !== 'POST') {
        console.log('Invalid method');
        return res.status(405).end(); // Метод не разрешен
    }

    const { email, password } = req.body;
    console.log('Received signup data:', email, password);

    if (!email || !password) {
        console.log('Email and password are required');
        return res.status(400).json({ message: 'Email и пароль обязательны' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: 'Пользователь уже существует' });
        }

        const newUser = new User({ email, password });
        await newUser.save();

        console.log('User created successfully:', email);
        res.status(201).json({ message: 'Пользователь успешно создан' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Внутренняя ошибка сервера' });
    }
}
