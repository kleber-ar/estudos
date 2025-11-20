import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import * as chaiHttp from 'chai-http';

import App from '../../src/App';
import SequelizeBook from '../../src/database/models/SequelizeBook';
import { book, books } from '../mocks/Book.mocks';
import Validations from '../../src/middlewares/Validations';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Books Test', function () {
  it('should create a book', async function () {
    sinon.stub(SequelizeBook, 'create').resolves(book as any);
    sinon.stub(Validations, 'validateBook').returns();

    const { id, ...sendData } = book;

    const { status, body } = await chai.request(app).post('/books')
      .send(sendData);

    expect(status).to.equal(201);
    expect(body).to.deep.equal(book);
  });

  it('shouldn\'t create a book with invalid body data', async function () {
    const { status, body } = await chai.request(app).post('/books')
      .send({});

    expect(status).to.equal(400);
    expect(body.message).to.equal('title is required');
  });

  it('should return all books', async function () {

    sinon.stub(SequelizeBook, 'findAll').resolves(books as any);


    const { status, body } = await chai.request(app).get('/books');


    expect(status).to.equal(200);

    expect(body).to.deep.equal(books);

  });


  it('should return a book by id', async function () {

    sinon.stub(SequelizeBook, 'findOne').resolves(book as any);


    const { status, body } = await chai.request(app).get('/books/1');


    expect(status).to.equal(200);

    expect(body).to.deep.equal(book);

  });


  it('should return not found if the book doesn\'t exists', async function () {

    sinon.stub(SequelizeBook, 'findOne').resolves(null);


    const { status, body } = await chai.request(app).get('/books/1');


    expect(status).to.equal(404);

    expect(body.message).to.equal('Book 1 not found');

  });
  afterEach(sinon.restore);
});
