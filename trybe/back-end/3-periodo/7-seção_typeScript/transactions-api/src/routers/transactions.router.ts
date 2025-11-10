import { Router } from 'express';
import transactionsController from '../controllers/transactions.controller';

const transactionsRouter = Router();

transactionsRouter.post('/transactions', transactionsController.create);
transactionsRouter.get('/transactions', transactionsController.list);

export default transactionsRouter;
