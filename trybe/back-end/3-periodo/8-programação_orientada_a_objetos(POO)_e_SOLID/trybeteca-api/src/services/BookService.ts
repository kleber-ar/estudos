import { NewEntity } from '../interfaces';
import BookModel from '../models/BookModel';
import { IBook } from '../interfaces/books/IBook';
import { IBookModel } from '../interfaces/books/IBookModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class BookService {
  constructor(
    private bookModel: IBookModel = new BookModel(),
  ) { }

  public async createBook(book: NewEntity<IBook>): Promise<ServiceResponse<IBook>> {
    const newBook = await this.bookModel.create(book);
    return { status: 'SUCCESSFUL', data: newBook };
  }

  public async getAllBooks(): Promise<ServiceResponse<IBook[]>> {
    const allBooks = await this.bookModel.findAll();
    return { status: 'SUCCESSFUL', data: allBooks };
  }

  public async getBookById(id: number): Promise<ServiceResponse<IBook>> {
    const book = await this.bookModel.findById(id);
    if (!book) return { status: 'NOT_FOUND', data: { message: `Book ${id} not found` } };
    return { status: 'SUCCESSFUL', data: book };
  }
}
