// lib/sendEmail.js
const transporter = require('./../models/mailConfig');

export const sendEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.MAIL_FROM, // Адрес отправителя
    to: email, // Адрес получателя
    subject: 'Verification Code', // Тема письма
    text: `Your verification code is ${code}`, // Текст письма
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email} with code ${code}`);
  } catch (error) {
    console.error(`Failed to send email to ${email}: ${error}`);
    throw new Error('Failed to send email');
  }
};

  
  