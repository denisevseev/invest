import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        const { 
            annualIncome,
            anticipatedAnnualDeposit,
            city,
            clientType,
            companyName,
            country,
            creditFundAccount,
            dateOfBirth,
            email,
            employmentStatus,
            firstName,
            fullAddress,
            intendedPurpose,
            lastName,
            nationality,
            netWorth,
            password,
            phoneNumber,
            politicallyExposedPerson,
            postalCode,
            sourceOfFunds
        } = req.body;
        
        const isCorporate = clientType === 'corporate';
        const isIndividual = clientType === 'individual';

        try {
            await client.connect();
            const db = client.db('victorum-portal');
            const usersCollection = db.collection('users');
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
                    annualIncome,
                    anticipatedAnnualDeposit,
                    city,
                    clientType,
                    companyName,
                    country,
                    creditFundAccount,
                    dateOfBirth,
                    email,
                    employmentStatus,
                    firstName,
                    fullAddress,
                    intendedPurpose,
                    lastName,
                    nationality,
                    netWorth,
                    password,
                    phoneNumber,
                    politicallyExposedPerson,
                    postalCode,
                    sourceOfFunds
                };
            } else {
                newUser = {
                    firstName,
                    phoneNumber,
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
