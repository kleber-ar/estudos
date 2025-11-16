import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import jwt from '../../../src/utils/jwt';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(() => {
    sinon.stub(jwt, 'verify').returns({ id: 1, userName: 'kleber' });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('Retorna 201 e o produto criado', async function () {
    sinon.stub(ProductModel, 'create').resolves({
      dataValues: {
        id: 1,
        name: 'Espada longa',
        price: '30 peças de ouro',
        userId: 1,
      }
    } as any);

    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 'Espada longa',
        price: '30 peças de ouro',
        userId: 1,
      });

    expect(response.status).to.equal(201);
    expect(response.body).to.include({ name: 'Espada longa', price: '30 peças de ouro', userId: 1 });
  });

  it('Falha se "name" não for informado', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        price: '30 peças de ouro',
        userId: 1,
      });

    expect(response.status).to.equal(400);
    expect(response.body.message).to.equal('"name" is required');
  });

  it('Falha se "price" não for informado', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 'Espada longa',
        userId: 1,
      });

    expect(response.status).to.equal(400);
    expect(response.body.message).to.equal('"price" is required');
  });

  it('Falha se "userId" não for informado', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 'Espada longa',
        price: '30 peças de ouro',
      });

    expect(response.status).to.equal(400);
    expect(response.body.message).to.equal('"userId" is required');
  });

  it('Falha se "userId" não for um número', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 'Espada longa',
        price: '30 peças de ouro',
        userId: 'abc',
      });

    expect(response.status).to.equal(422);
    expect(response.body.message).to.equal('"userId" must be a number');
  });

  it('Falha se "name" não for string', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 123,
        price: '30 peças de ouro',
        userId: 1,
      });

    expect(response.status).to.equal(422);
    expect(response.body.message).to.equal('"name" must be a string');
  });

  it('Falha se "price" não for string', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 'Espada longa',
        price: 30,
        userId: 1,
      });

    expect(response.status).to.equal(422);
    expect(response.body.message).to.equal('"price" must be a string');
  });

  it('Falha se "name" tiver menos de 3 caracteres', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 'AB',
        price: '30 peças de ouro',
        userId: 1,
      });

    expect(response.status).to.equal(422);
    expect(response.body.message).to.equal('"name" length must be at least 3 characters long');
  });

  it('Falha se "price" tiver menos de 3 caracteres', async function () {
    const response = await chai.request(app)
      .post('/products')
      .set('Authorization', 'token')
      .send({
        name: 'Espada longa',
        price: '12',
        userId: 1,
      });

    expect(response.status).to.equal(422);
    expect(response.body.message).to.equal('"price" length must be at least 3 characters long');
  });
});
