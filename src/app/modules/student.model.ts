import { model, Schema } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './students/student.interface';


const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
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
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'feMale'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emargencyContact: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presetAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianschema,
  photoUrl: { type: String },
  isActive: ['active', 'Blocked'],
});

const StudentModel = model<Student>('Student', studentSchema);
