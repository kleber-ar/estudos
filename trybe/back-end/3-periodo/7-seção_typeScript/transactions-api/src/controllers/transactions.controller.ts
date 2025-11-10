import { Request, Response } from 'express';
import transactionsService from '../services/transactions.service';
import statusHTTP from '../utils/statusHTTP';

async function create(req: Request, res: Response) {
  const { name, price, type, userId } = req.body;

  const serviceResponse = await transactionsService.create({ name, price, type, userId });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(statusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  res.status(201).json(serviceResponse.data);
}

async function list(_req: Request, res: Response) {
  const serviceResponse = await transactionsService.list();

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(statusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  res.status(200).json(serviceResponse.data);
}

export default {
  create,
  list,
};
