// insertData.js
import dbConnect from './lib/dbConnect.js';
import mongoose from 'mongoose';

// Define the schema for the user data
const userSchema = new mongoose.Schema({
    annualIncome: String,
    anticipatedAnnualDeposit: String,
    city: String,
    clientType: String,
    companyName: String,
    country: String,
    dateOfBirth: Date,
    employmentStatus: String,
    firstName: String,
    fullAddress: String,
    intendedPurpose: String,
    lastName: String,
    nationality: String,
    netWorth: String,
    password: String,
    politicallyExposedPerson: String,
    postalCode: String,
    sourceOfFunds: String,
    emailVerified: Boolean,
    phoneVerified: Boolean,
    verificationCode: String
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

async function insertData() {
    // Connect to the MongoDB database
    await dbConnect();

    try {
        // Create a new user document
        const newUser = new User({
            annualIncome: 'Less than $50,000',
            anticipatedAnnualDeposit: '$100,000 - $500,000',
            city: 'mosc',
            clientType: 'individual',
            companyName: '',
            country: 'Antigua and Barbuda',
            creditFundAccount: 'Credit Card',
            dateOfBirth: new Date('1994-06-09'),
            employmentStatus: 'Self-Employed',
            firstName: 'fhgg',
            fullAddress: 'hdhdhfhf',
            intendedPurpose: 'Retirement',
            lastName: 'bbvv',
            nationality: 'Afghanistan',
            netWorth: '$100,000 - $500,000',
            password: 'UbOewIcBrU79',
            politicallyExposedPerson: 'No',
            postalCode: '474748',
            sourceOfFunds: 'Savings',
            emailVerified: false,
            phoneVerified: true,
            verificationCode: ''
        });

        // Save the user document to the database
        await newUser.save();

        console.log('User data inserted successfully');
    } catch (error) {
        console.error('Error inserting user data:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
}

// Run the insertData function
insertData();
