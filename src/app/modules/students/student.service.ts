import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (studentData: Student) => {
  //   const result = await StudentModel.create(student); built in static method
  //   return result;

  const student = new StudentModel(studentData);
  const result = await student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
