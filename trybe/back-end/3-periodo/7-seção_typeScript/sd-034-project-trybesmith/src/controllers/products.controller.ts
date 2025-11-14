import { Request, Response } from 'express';
import service from "../services/products.service";
import statusHTTP from "../utils/statusHTTP";

async function create(req: Request, res: Response) {
  const { name, price, userId } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!price) return res.status(400).json({ message: '"price" is required' });
  if (!userId) return res.status(400).json({ message: '"userId" is required' });

  const response = await service.create({ name, price, userId });

  if (response.status !== 'CREATED') {
    return res.status(statusHTTP(response.status)).json(response.data);
  }

  res.status(statusHTTP(response.status)).json(response.data);
}

async function getAll(req: Request, res: Response) {
  const response = await service.getAll();
  return res.status(statusHTTP(response.status)).json(response.data);
}

export default {
  create,
  getAll,
};

