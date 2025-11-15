import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  const serviceResponse = await loginService.login(username, password);

  if (serviceResponse.status === 'BAD_REQUEST') {
    return res.status(400).json(serviceResponse.data);
  }

  if (serviceResponse.status === 'UNAUTHORIZED') {
    return res.status(401).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
}

export default {
  login,
};
