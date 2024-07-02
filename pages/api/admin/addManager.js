import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { email, password, phoneNumber, firstName, lastName } = req.body;

    try {
    //   const hashedPassword = await hash(password, 10);

      const newUser = new User({
        email,
        password: password,
        phoneNumber,
        role: 'manager',
        emailVerified: false,
        phoneVerified: false,
      });

      await newUser.save();
      res.status(201).json({ message: 'Manager created successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error creating manager', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
