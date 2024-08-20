// emailService.js

const transporter = require('./../../models/mailConfig');

async function sendEmail(to, subject, text, html) {
    try {
        // Отправляем письмо
        let info = await transporter.sendMail({
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: to,
            subject: subject,
            text: text,
            html: html
        });

        console.log('Message sent: %s', info.messageId);
        return info.messageId;
    } catch (err) {
        console.error('Error occurred while sending email:', err);
        throw err;
    }
}

module.exports = { sendEmail };
