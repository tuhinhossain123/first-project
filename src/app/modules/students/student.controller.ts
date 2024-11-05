import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';

const catchAsnyc = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const getAllStudents = catchAsnyc(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student are ritrived successfully',
    data: result,
  });
});
const getSingleStudents: RequestHandler = catchAsnyc(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentsFromDB(studentId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student are ritrived successfully',
    data: result,
  });
});
const deleteStudents: RequestHandler = catchAsnyc(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentsFromDB(studentId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student are delete successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
