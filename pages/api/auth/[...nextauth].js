import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import mongoose from 'mongoose';
import User from '../../../models/User';

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
        console.log('Received credentials:', credentials);
        const user = await User.findOne({ email: credentials.email });
        console.log('User found:', user);
        if (user && user.password === credentials.password) {
          console.log('Authentication successful');
          return { id: user._id, email: user.email };
        }
        console.log('Authentication failed');
        return null;
      }
    })
  ],
  database: process.env.MONGODB_URI,
  callbacks: {
    async session({ session, token }) {
      console.log('Session callback invoked');
      session.user.id = token.id;
      console.log('Session:', session);
      return session;
    },
    async jwt({ token, user }) {
      console.log('JWT callback invoked');
      if (user) {
        token.id = user.id;
        console.log('User in JWT callback:', user);
        console.log('Token in JWT callback:', token);
      }
      return token;
    },
  },
});
