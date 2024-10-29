import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.zod';
// import studentValidationJoiSchema from './student.validation';

const crearteStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // // data validation useing by joi
    // const { error, value } = studentValidationJoiSchema.validate(studentData);

    // creating a schema using by zod
    const zodParseData = studentValidationSchema.parse(studentData);
    const result = await StudentServices.createStudentIntoDB(zodParseData);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   });
    // }
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are ritrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student are ritrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  crearteStudent,
  getAllStudents,
  getSingleStudents,
};
