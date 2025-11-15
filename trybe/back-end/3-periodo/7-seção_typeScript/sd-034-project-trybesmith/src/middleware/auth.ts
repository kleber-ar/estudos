import { Request, Response, NextFunction } from 'express';
import jwt from '../utils/jwt';

export default function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const data = jwt.verify(token);
    (req as any).user = data;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
