import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/student-create', UserControllers.crearteStudent);

export const UserRoute = router;
