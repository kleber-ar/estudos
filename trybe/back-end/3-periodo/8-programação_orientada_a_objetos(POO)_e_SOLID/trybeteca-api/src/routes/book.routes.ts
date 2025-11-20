import { Request, Router, Response } from 'express';
import BookController from '../controllers/BookController';
import Validations from '../middlewares/Validations';

const bookController = new BookController();

const router = Router();

router.post(
  '/',
  Validations.validateBook,
  (req: Request, res: Response) => bookController.createBook(req, res),
);

export default router;
