import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/students/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/middleWares/globalErrorHandlre';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', StudentRoute);
app.use('/api/v1/users', UserRoute);

const getAController = (_req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAController);

app.use(globalErrorHandler);
export default app;
