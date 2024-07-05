// models/User.js
import mongoose from 'mongoose';
import leanVirtuals from 'mongoose-lean-virtuals';

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  emailVerified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false },
  verificationCode: { type: String },
  signedDocuments: { type: Buffer },
  role: { type: String, enum: ['admin', 'manager', 'employee', 'investor'], required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  referralCode: { type: String, unique: true, sparse: true },
  usedReferralCode: { type: Boolean, default: false }
}, { timestamps: true });

UserSchema.virtual('assignedEmployees', {
  ref: 'User',
  localField: '_id',
  foreignField: 'assignedTo',
  justOne: false
});

UserSchema.virtual('assignedInvestors', {
  ref: 'User',
  localField: '_id',
  foreignField: 'assignedTo',
  justOne: false
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

UserSchema.plugin(leanVirtuals);

export default mongoose.models.User || mongoose.model('User', UserSchema);
