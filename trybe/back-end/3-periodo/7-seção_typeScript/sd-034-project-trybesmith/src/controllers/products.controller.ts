import { Request, Response } from 'express';
import service from "../services/products.service";
import statusHTTP from "../utils/statusHTTP";

async function create(req: Request, res: Response) {
  const { status, data } = await service.create(req.body);
  return res.status(statusHTTP(status)).json(data);
}

async function getAll(_req: Request, res: Response) {
  const response = await service.getAll();
  return res.status(statusHTTP(response.status)).json(response.data);
}

export default {
  create,
  getAll,
};

