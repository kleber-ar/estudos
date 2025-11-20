import SequelizeBook from '../database/models/SequelizeBook';
import { IBook } from '../interfaces/books/IBook';
import { IBookModel } from '../interfaces/books/IBookModel';
import { NewEntity } from '../interfaces';

export default class BookModel implements IBookModel {
  private model = SequelizeBook;

  async create(data: NewEntity<IBook>): Promise<IBook> {
    const dbData = await this.model.create(data);

    const { id, title, price, author, isbn }: IBook = dbData;
    return { id, title, price, author, isbn };
  }

  async findAll(): Promise<IBook[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, title, price, author, isbn }) => (
      { id, title, price, author, isbn }
    ));
  }

  async findById(id: IBook['id']): Promise<IBook | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;

    const { title, price, author, isbn }: IBook = dbData;
    return { id, title, price, author, isbn };
  }
}
