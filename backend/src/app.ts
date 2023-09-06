import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { handleErrors } from './middlewares/handleError.middleware';
import productsRoutes from './routes/products.routes';

const app = express();
app.use(express.json());

app.use("/products", productsRoutes)

app.use(handleErrors)
export default app;