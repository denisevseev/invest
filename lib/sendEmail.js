// lib/sendEmail.js
const transporter = require('./../models/mailConfig');

export const sendEmail = async (email, code) => {
  const mailOptions = {
    from: process.env.MAIL_FROM, // Адрес отправителя
    to: email, // Адрес получателя
    subject: 'Your Verification Code from Victorum Capital', // Тема письма
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Welcome to Victorum Capital!</h2>
        <p>Dear user,</p>
        <p>Thank you for registering with us. To complete your registration, please use the following verification code:</p>
        <p style="font-size: 1.5em; font-weight: bold;">${code}</p>
        <p>Please enter this code in the required field to verify your email address.</p>
        <p>If you did not request this code, please ignore this email.</p>
        <p>Best regards,<br/>
        The Victorum Capital Team</p>
        <p style="font-size: 0.8em; color: #888;">© 2023 victorum-capital.com. All rights reserved.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email} with code ${code}`);
  } catch (error) {
    console.error(`Failed to send email to ${email}: ${error}`);
    throw new Error('Failed to send email');
  }
};
