import { Model, Types } from 'mongoose';

export type TGuardian = {
  father: string;
  fatherOccuption: string;
  fatherContact: string;
  mother: string;
  motherOccuption: string;
  motherContact: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emargencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presetAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  photoUrl?: string;
  isDeleated: boolean;
};

// for create a static
export interface StudentModel extends Model<TStudent> {
  isUserExtis(id: string): Promise<TStudent | null>;
}

// for creating a instance method
// export type StudentMethods = {
//   isUserExtis(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
