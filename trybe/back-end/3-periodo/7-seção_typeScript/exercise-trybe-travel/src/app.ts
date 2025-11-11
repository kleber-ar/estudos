import express, { Request, Response } from 'express';
import packagesRouter from './routes/package.router';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

app.use(packagesRouter);

export default app;
