// models/ResetToken.js
import mongoose from 'mongoose';

const resetTokenSchema = new mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 } // Токен будет действителен в течение 1 часа
});

export default mongoose.models.ResetToken || mongoose.model('ResetToken', resetTokenSchema);
