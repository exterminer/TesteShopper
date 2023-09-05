import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { handleErrors } from './middlewares/handleError.middleware';

const app = express();
app.use(express.json());



app.use(handleErrors)
export default app;