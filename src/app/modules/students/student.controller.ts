import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student are ritrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentsFromDB(studentId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student are ritrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentsFromDB(studentId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student are delete successfully',
      data: result,
    });
  } catch (error: any) {
    next();
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
