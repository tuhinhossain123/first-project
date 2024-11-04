import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    needsPassword: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
    },
    isDeleted: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// pre save midleware
userSchema.pre('save', async function (next) {
  // hasing password and save into DB
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrpt_salt_round),
  );
  next();
});
// post '' saving after password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>('User', userSchema);
