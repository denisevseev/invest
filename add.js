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
      
