import { Request, Response } from 'express';
import BookService from '../services/BookService';

export default class BookController {
  constructor(
    private bookService = new BookService(),
  ) { }

  public async createBook(req: Request, res: Response) {
    const serviceResponse = await this.bookService.createBook(req.body);
    res.status(201).json(serviceResponse.data);
  }
}
