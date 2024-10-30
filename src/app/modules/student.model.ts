import { model, Schema } from 'mongoose';
import validator from 'validator';
import {
  StudentMethods,
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './students/student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    maxlength: [20, 'First Name can not be mor then 20 cheracters'],
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not capitalize formate',
    // },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    trim: true,
    // validate:{
    //     validator:(value: string)=>validator.isAlpha(value),
    //     message: "{VALUE} is not a valid"

    // }
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

const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({
  id: {
    type: String,
    required: [true, 'Student ID is required.'],
    unique: true,
    trim: true,
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
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status option.',
    },
    default: 'active',
    trim: true,
  },
});

studentSchema.methods.isUserExtis = async function (id: string) {
  const exitsUser = await Student.findOne({ id: id });
  return exitsUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
