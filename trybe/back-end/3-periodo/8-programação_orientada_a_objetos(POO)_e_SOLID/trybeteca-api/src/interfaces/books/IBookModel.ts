import { IBook } from './IBook';

export interface IBookModel {
  create(data: Partial<IBook>): Promise<IBook>,
  findAll(): Promise<IBook[]>,
  findById(id: IBook['id']): Promise<IBook | null>
}
