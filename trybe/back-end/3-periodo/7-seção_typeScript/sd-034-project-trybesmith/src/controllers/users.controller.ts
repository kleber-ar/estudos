import { Request, Response } from 'express';
import usersService from '../services/users.service';
import statusHTTP from '../utils/statusHTTP';

async function getAll(_req: Request, res: Response) {
  const response = await usersService.getAll();
  return res.status(statusHTTP(response.status)).json(response.data);
}

export default { getAll };
