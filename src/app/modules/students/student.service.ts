import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExtis(studentData.id)) {
    throw new Error('User already exits');
  }
  const result = await Student.create(studentData); //built in static method
  return result;

  //create an instance
  //   const student = new Student(studentData);

  //   if (await student.isUserExtis(studentData.id)) {
  //     throw new Error('User already exits');
  //   }
  //   const result = await student.save();
  //   return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
