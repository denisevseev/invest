import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import mongoose from 'mongoose';
import User from '../../../models/User';
import logToFile from './logger'; // Путь к вашему файлу logger.js

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        logToFile('Received credentials: ' + JSON.stringify(credentials)); // Логгирование полученных учетных данных
        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            logToFile('No user found with the given email'); // Логгирование отсутствия пользователя
            return null;
          }

          logToFile('User found: ' + JSON.stringify(user)); // Логгирование найденного пользователя
          if (user.password !== credentials.password) {
            logToFile('Invalid password'); // Логгирование неверного пароля
            return null;
          }

          logToFile('Authentication successful'); // Логгирование успешной аутентификации
          return { id: user._id, email: user.email };
        } catch (error) {
          logToFile('Error during authentication: ' + error.message); // Логгирование ошибки аутентификации
          console.error('Error during authentication:', error);
          return null;
        }
      }
    })
  ],
  session: {
    jwt: true,
  },
  jwt: {
    encryption: true,
    secret: process.env.JWT_SECRET,
    encryptionKey: process.env.JWT_ENCRYPTION_KEY,
  },
  callbacks: {
    async session({ session, token }) {
      logToFile('Session callback invoked'); // Логгирование вызова колбэка сессии
      session.user.id = token.id;
      logToFile('Session: ' + JSON.stringify(session)); // Логгирование данных сессии
      return session;
    },
    async jwt({ token, user }) {
      logToFile('JWT callback invoked'); // Логгирование вызова колбэка JWT
      if (user) {
        token.id = user.id;
        logToFile('User in JWT callback: ' + JSON.stringify(user)); // Логгирование данных пользователя в JWT
        logToFile('Token in JWT callback: ' + JSON.stringify(token)); // Логгирование токена JWT
      }
      return token;
    },
  },
});
