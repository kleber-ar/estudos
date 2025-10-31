const { expect } = require('chai');

const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model');

describe('Model - Sales', function () {
  afterEach(function () { sinon.restore(); });

  it('retorna todas as vendas', async function () {
    const mock = [
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2,
      },
    ];

    sinon.stub(connection, 'execute').resolves([mock]);

    const result = await salesModel.findAll();
    expect(result).to.deep.equal(mock);
  });

  it('retorna uma venda por id', async function () {
    const mock = [
      {
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2,
      },
    ];

    sinon.stub(connection, 'execute').resolves([mock]);

    const result = await salesModel.findById(1);
    expect(result).to.deep.equal(mock);
  });
});
