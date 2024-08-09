const nodemailer = require('nodemailer');

// Настройки транспортера
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true для 465 порта, иначе false
    auth: {
        user: 'support@victorum-capital.com', // Имя пользователя (логин)
        pass: 'ChghryXLe7JBHjtaJPiw', // Пароль для SMTP сервера
    },
});

// Опции письма
const mailOptions = {
    from: '"Victorum Capital Support" <support@victorum-capital.com>', // От кого
    to: 'tv_bb@mail.ru', // Кому (замените на нужный адрес)
    subject: 'Test Email', // Тема письма
    text: 'This is a test email sent using Node.js and Nodemailer.', // Текст письма
    html: '<p>This is a test email sent using <strong>Node.js</strong> and Nodemailer.</p>', // HTML-версия письма
};

// Отправка письма
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error sending email:', error);
    }
    console.log('Email sent successfully:', info.response);
});
