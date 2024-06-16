import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        const { clientType, firstName, lastName, companyName, country, phoneNumber, city, email, password, dateOfBirth, fullAddress, nationality, postalCode, securityQuestion1, securityQuestion2, securityQuestion3, securityQuestion4, securityQuestion5, securityQuestion6, securityQuestion7, securityQuestion8, securityQuestion9, securityQuestion10, name, phone } = req.body;
        const isCorporate = clientType === 'corporate';
        const isIndividual = clientType === 'individual';

        try {
            await client.connect();
            const db = client.db('victorum-portal');
            const usersCollection = db.collection('users');
            console.log(req.body);
            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: 'User with this email already exists' });
            }

            let newUser;
            if (isCorporate) {
                newUser = {
                    clientType,
                    companyName,
                    country,
                    phoneNumber,
                    email,
                    password,
                };
            } else if (isIndividual) {
                newUser = {
                    clientType,
                    firstName,
                    lastName,
                    country,
                    phoneNumber,
                    email,
                    password,
                    dateOfBirth,
                    fullAddress,
                    city,
                    nationality,
                    postalCode,
                    securityQuestion1,
                    securityQuestion2,
                    securityQuestion3,
                    securityQuestion4,
                    securityQuestion5,
                    securityQuestion6,
                    securityQuestion7,
                    securityQuestion8,
                    securityQuestion9,
                    securityQuestion10,
                };
            } else {
                newUser = {
                    name,
                    phone,
                    email,
                    password,
                };
            }

            console.log('New User:', newUser);

            await usersCollection.insertOne(newUser);

            res.status(200).json({ message: 'User registered successfully!' });
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).json({ message: 'Internal server error' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).end();
    }
}
