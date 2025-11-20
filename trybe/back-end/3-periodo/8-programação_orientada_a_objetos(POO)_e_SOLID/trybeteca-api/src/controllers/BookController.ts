import { Request, Response } from 'express';
import BookService from '../services/BookService';
import statusHTTP from '../utils/statusHTTP';

export default class BookController {
  constructor(
    private bookService = new BookService(),
  ) { }

  // 💡 Mude para arrow function
  public createBook = async (req: Request, res: Response) => {
    const serviceResponse = await this.bookService.createBook(req.body);
    res.status(201).json(serviceResponse.data);
  };

  // 💡 Mude para arrow function - isso corrige seu erro!
  public getAllBooks = async (_req: Request, res: Response) => {
    const serviceResponse = await this.bookService.getAllBooks();

    res.status(200).json(serviceResponse.data);
  };

  // 💡 Mude para arrow function
  public getBookById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const serviceResponse = await this.bookService.getBookById(Number(id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(statusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  };
}
