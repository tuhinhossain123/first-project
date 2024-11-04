import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/students/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/middleWares/globalErrorHandlre';
import notFound from './app/middleWares/notFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1', router);

const test = (_req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

app.use(globalErrorHandler);

// Not Found
app.use(notFound);
export default app;
