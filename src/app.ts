import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import memeRouter from './routes/memeRouter';

const app = express();
app.use(json());
app.use(cors());
app.use(memeRouter);
app.use(errorHandlerMiddleware);

export default app;
