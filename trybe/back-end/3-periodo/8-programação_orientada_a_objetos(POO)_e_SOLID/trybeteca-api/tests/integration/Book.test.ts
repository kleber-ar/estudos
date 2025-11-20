import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../../src/App';
import SequelizeBook from '../../src/database/models/SequelizeBook';
import { book } from '../mocks/Book.mocks';
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
  afterEach(sinon.restore);
});
