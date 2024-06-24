// lib/sendSMS.js
import axios from 'axios';

export const sendSMS = async (phoneNumber, code) => {
  const url = `${process.env.SMS_BASE_URL}/messages/v1/send`;
  const headers = {
    'Authorization': `Bearer ${process.env.SMS_SECRET}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const additionalText = "Thank you very much for your submission. https://www.victorum-capital.com to contact us! Your verification code: ";
  const highlightedCode = `*** ${code} ***`;
  const content = `${additionalText}${highlightedCode}`;

  const data = {
    messages: [
      {
        channel: 'sms',
        recipients: [phoneNumber],
        content: content,
        msg_type: 'text',
        data_coding: 'auto',
      }
    ],
    message_globals: {
      originator: process.env.SMS_FROM,
      // report_url: process.env.SMS_CALLBACK,
    }
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(`SMS sent to ${phoneNumber} with code ${code}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to send SMS to ${phoneNumber}: ${error}`);
    throw new Error('Failed to send SMS');
  }
};
