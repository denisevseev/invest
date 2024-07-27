import { MongoClient } from 'mongodb';
import store from "../../../stores/userStore";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
    if (req.method === 'POST') {
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
            sourceOfFunds,
            investmentAmount,
            shareholdingPeriod
        } = req.body;

        const isCorporate = clientType === 'corporate';
        const isIndividual = clientType === 'individual';

        try {
            await client.connect();
            const db = client.db('victorum-portal');
            const usersCollection = db.collection('users');
            const existingUser = await usersCollection.findOne({ email });

            let updateData = {};
            if (isCorporate) {
                updateData = {
                    clientType,
                    companyName,
                    country,
                    phoneNumber,
                    email,
                    password,
                    investmentAmount,
                    shareholdingPeriod,
                };
            } else if (isIndividual) {
                updateData = {
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
                    sourceOfFunds,
                    investmentAmount,
                    shareholdingPeriod
                };
            } else {
                updateData = {
                    firstName,
                    phoneNumber,
                    email,
                    password,
                };
            }

            if (existingUser) {
                // Обновление существующего пользователя
                await usersCollection.updateOne({ email }, { $set: updateData });
                return res.status(200).json({ message: 'User updated successfully!' });
            } else {
                // Создание нового пользователя
                await usersCollection.insertOne(updateData);
                return res.status(200).json({ message: 'User registered successfully!' });
            }
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
