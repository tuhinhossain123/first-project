import { model, Schema } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './students/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: [true, 'First name is requierd'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name is requierd'] },
});

const guardianSchema = new Schema<Guardian>({
  father: { type: String, required: true },
  fatherOccuption: { type: String, required: true },
  fatherContact: { type: String, required: true },
  mother: { type: String, required: true },
  motherOccuption: { type: String, required: true },
  motherContact: { type: String, required: true },
});

const localGuardianschema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'feMale', 'Other'],
      message: '{VALUE} is Not Valid',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  emargencyContact: { type: String },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presetAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianschema, required: true },
  photoUrl: { type: String },
  isActive: { type: String, enum: ['active', 'Blocked'], default: 'active' },
});

export const StudentModel = model<Student>('Student', studentSchema);
