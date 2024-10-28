import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/student-create', StudentControllers.crearteStudent);
router.get('/', StudentControllers.getAllStudents);

export const StudentRoute = router;
