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

  afterEach(function () {
    sinon.restore();
  });

  it('Retorna 201 e o produto criado', async function () {
    sinon.stub(ProductModel, 'create').resolves({
      id: 1,
      name: 'Espada longa',
      price: '30 peças de ouro',
      userId: 1,
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
  });
});
