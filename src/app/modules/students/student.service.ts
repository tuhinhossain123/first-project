import { Student } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};
const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleated: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
