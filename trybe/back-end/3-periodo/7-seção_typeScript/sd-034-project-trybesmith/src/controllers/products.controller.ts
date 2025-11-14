import { Request, Response } from 'express';
import service from "../services/products.service";
import statusHTTP from "../utils/statusHTTP";

async function create(req: Request, res: Response) {
  const { name, price, userId } = req.body;
  const response = await service.create({ name, price, userId });

  if (response.status !== 'CREATED') {
    return res.status(statusHTTP(response.status)).json(response.data);
  }

  res.status(statusHTTP(response.status)).json(response.data);
}

export default {
  create,
};
