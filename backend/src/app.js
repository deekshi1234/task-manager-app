import express from 'express';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import notFound from './middlewares/notFound.js';
import morgan from 'morgan';
import globalErrorHandler from "./middlewares/globalErrorHandlers.js";


const app = express(); 


app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.use(notFound);
app.use(globalErrorHandler);

export default app;