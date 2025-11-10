import { Request, Response } from 'express';
import transactionsService from '../services/transactions.service';

async function create(req: Request, res: Response) {
  const { name, price, type, userId } = req.body;
  const transaction = await transactionsService.create({ name, price, type, userId });
  res.status(201).json(transaction);
}

export default {
  create,
};
