    const mongoose = require('mongoose');

    // Подключитесь к MongoDB
    mongoose.connect('mongodb://localhost:27017/victorum-portal', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Определите модель пользователя
    const UserSchema = new mongoose.Schema({
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    });

    const User = mongoose.model('User', UserSchema);

    // Добавьте нового пользователя
    const addUser = async () => {
        try {
            const user = new User({ email: 'teste4322@example.com', password: 'wssssdf#sdf3434' });
            await user.save();
            console.log('User created successfully');
        } catch (error) {
            console.error('Error creating user:', error);
        } finally {
            mongoose.connection.close();
        }
    };

    addUser();

    db.createUser({
        user: 'denis',
        pwd: 'uk78Alch1ROlgbaR',
        roles: [
          { role: 'readWrite', db: 'victory-portal' } 
        ]
      });

    db.users.insertOne({
        annualIncome: '$50,000 - $100,000',
        anticipatedAnnualDeposit: '$50,000 - $100,000',
        city: 'sdfsdf',
        clientType: 'individual',
        companyName: '',
        country: 'Afghanistan',
        creditFundAccount: 'Bank Transfer',
        dateOfBirth: '2024-07-10',
        email: 'tk_bb1222@mail.ru',
        employmentStatus: 'Employed',
        firstName: 'sdfsdf',
        fullAddress: 'sdfsf',
        intendedPurpose: 'Other',
        lastName: 'evseev',
        nationality: 'United Arab Emirates',
        netWorth: '$50,000 - $100,000',
        password: '1223',
        phoneNumber: '45345345',
        politicallyExposedPerson: 'No',
        postalCode: 'sdfsdf',
        sourceOfFunds: 'Business'
    });

      
