import express from 'express';
import usersRouter from './routes/users.routes';
import productsRouter from './routes/products.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter)
app.use('/users', usersRouter)

export default app;
