import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/student-create', StudentControllers.crearteStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudents);
router.delete('/:studentId', StudentControllers.deleteStudents);

export const StudentRoute = router;
