import { model, Schema } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './students/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { 
    type: String, 
    required: [true, 'First name is required.'] 
  },
  middleName: { 
    type: String 
  },
  lastName: { 
    type: String, 
    required: [true, 'Last name is required.'] 
  },
});

const guardianSchema = new Schema<Guardian>({
  father: { 
    type: String, 
    required: [true, 'Father name is required.'] 
  },
  fatherOccupation: { 
    type: String, 
    required: [true, 'Father’s occupation is required.'] 
  },
  fatherContact: { 
    type: String, 
    required: [true, 'Father’s contact number is required.'] 
  },
  mother: { 
    type: String, 
    required: [true, 'Mother name is required.'] 
  },
  motherOccupation: { 
    type: String, 
    required: [true, 'Mother’s occupation is required.'] 
  },
  motherContact: { 
    type: String, 
    required: [true, 'Mother’s contact number is required.'] 
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { 
    type: String, 
    required: [true, 'Local guardian name is required.'] 
  },
  occupation: { 
    type: String, 
    required: [true, 'Local guardian’s occupation is required.'] 
  },
  contactNo: { 
    type: String, 
    required: [true, 'Local guardian’s contact number is required.'] 
  },
  address: { 
    type: String, 
    required: [true, 'Local guardian’s address is required.'] 
  },
});

const studentSchema = new Schema<Student>({
  id: { 
    type: String, 
    required: [true, 'Student ID is required.'], 
    unique: true 
  },
  name: { 
    type: userNameSchema, 
    required: [true, 'Student name is required.'] 
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender option.',
    },
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: { 
    type: String 
  },
  contactNo: { 
    type: String, 
    required: [true, 'Student contact number is required.'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email address is required.'], 
    unique: true 
  },
  emergencyContact: { 
    type: String 
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood group.',
    },
  },
  presentAddress: { 
    type: String, 
    required: [true, 'Present address is required.'] 
  },
  permanentAddress: { 
    type: String, 
    required: [true, 'Permanent address is required.'] 
  },
  guardian: { 
    type: guardianSchema, 
    required: [true, 'Guardian details are required.'] 
  },
  localGuardian: { 
    type: localGuardianSchema, 
    required: [true, 'Local guardian details are required.'] 
  },
  photoUrl: { 
    type: String 
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status option.',
    },
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
