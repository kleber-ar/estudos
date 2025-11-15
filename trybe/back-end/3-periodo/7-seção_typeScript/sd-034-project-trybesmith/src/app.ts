import express from 'express';
import usersRouter from './routes/users.routes';
import productsRouter from './routes/products.router';
import loginController from './controllers/login.controller';
import auth from './middleware/auth';

const app = express();

app.use(express.json());

app.post('/login', loginController.login)
app.use(auth);
app.use('/products', productsRouter)
app.use('/users', usersRouter)

export default app;
