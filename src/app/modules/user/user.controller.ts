import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const crearteStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;
    // const zodParseData = studentValidationSchema.parse(studentData);
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  crearteStudent,
};
