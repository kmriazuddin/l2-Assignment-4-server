import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.text());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome Mechanical Keyboard Shop!');
});

app.use('/api/v1', router);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
