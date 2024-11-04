import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
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
    res.status(200).json({
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
    res.status(200).json({
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
