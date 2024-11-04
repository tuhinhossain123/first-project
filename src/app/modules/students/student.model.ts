import { model, Schema } from 'mongoose';
import validator from 'validator';

import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    maxlength: [20, 'First Name can not be mor then 20 cheracters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    trim: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  father: {
    type: String,
    required: [true, 'Father name is required.'],
    trim: true,
  },
  fatherOccuption: {
    type: String,
    required: [true, 'Father’s occupation is required.'],
    trim: true,
  },
  fatherContact: {
    type: String,
    required: [true, 'Father’s contact number is required.'],
    trim: true,
  },
  mother: {
    type: String,
    required: [true, 'Mother name is required.'],
    trim: true,
  },
  motherOccuption: {
    type: String,
    required: [true, 'Mother’s occupation is required.'],
    trim: true,
  },
  motherContact: {
    type: String,
    required: [true, 'Mother’s contact number is required.'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required.'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian’s occupation is required.'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian’s contact number is required.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Local guardian’s address is required.'],
    trim: true,
  },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required.'],
      unique: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required.'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: userNameSchema,
      required: [true, 'Student name is required.'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not a valid gender option.',
      },
      required: [true, 'Gender is required.'],
      trim: true,
    },
    dateOfBirth: {
      type: String,
      trim: true,
    },
    contactNo: {
      type: String,
      required: [true, 'Student contact number is required.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email address is required.'],
      unique: true,
      trim: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not valid',
      },
    },
    emargencyContact: {
      type: String,
      trim: true,
    },
    bloodGroup: {
      type: String,
      trim: true,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group.',
      },
    },
    presetAddress: {
      type: String,
      required: [true, 'Present address is required.'],
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required.'],
      trim: true,
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian details are required.'],
      trim: true,
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian details are required.'],
      trim: true,
    },
    photoUrl: {
      type: String,
      trim: true,
    },
    isDeleated: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// virtual
studentSchema.virtual('fullName').get(function () {
  return this.name.firstName + this.name.middleName + this.name.lastName;
});

// queiry midleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleated: { $ne: true } });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleated: { $ne: true } });
  next();
});
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleated: { $ne: true } } });
  next();
});

// create a static method
studentSchema.statics.isUserExtis = async function (id: string) {
  const exitsUser = await Student.findOne({ id });
  return exitsUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
