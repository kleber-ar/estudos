import { IBook } from './IBook';

export interface IBookModel {
  create(data: Partial<IBook>): Promise<IBook>,
}
