import express, { Request, Response } from 'express';
import authMiddleware from './middlewares/auth';
import loginRouter from './routers/login.router';
import transactionsRouter from './routers/transactions.router';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.use(loginRouter);
app.use(authMiddleware);
app.use(transactionsRouter);

export default app;
