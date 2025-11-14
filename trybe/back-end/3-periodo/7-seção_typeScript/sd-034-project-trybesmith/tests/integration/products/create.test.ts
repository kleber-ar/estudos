import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Retorna 201 e o produto criado', async function () {
    const mockProduct = {
      id: 1,
      name: 'Espada longa',
      price: '30 peças de ouro',
      userId: 1,
      dataValues: {
        id: 1,
        name: 'Espada longa',
        price: '30 peças de ouro',
        userId: 1,
      },
    };

    sinon.stub(ProductModel, 'create').resolves(mockProduct as any);

    const response = await chai.request(app)
      .post('/products')
      .send({
        name: 'Espada longa',
        price: '30 peças de ouro',
        userId: 1,
      });

    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({
      id: 1,
      name: 'Espada longa',
      price: '30 peças de ouro',
      userId: 1,
    });
  });

  it('Retorna 400 quando faltar campo', async function () {
    const response = await chai.request(app)
      .post('/products')
      .send({
        price: '30 peças de ouro',
        userId: 1,
      });

    expect(response.status).to.equal(400);
    expect(response.body).to.deep.equal({
      message: '"name" is required',
    });
  });

  it('Retorna 500 quando o model.create lança erro', async function () {
    sinon.stub(ProductModel, 'create').throws(new Error('DB exploded'));

    const response = await chai.request(app)
      .post('/products')
      .send({
        name: 'Espada longa',
        price: '30 peças de ouro',
        userId: 1,
      });

    expect(response.status).to.equal(500);
    expect(response.body).to.deep.equal({
      message: 'Internal server error',
    });
  });
});
