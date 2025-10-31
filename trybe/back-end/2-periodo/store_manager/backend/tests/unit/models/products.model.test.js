const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');

describe('Model - Products', function () {
  afterEach(function () { sinon.restore(); });

  it('retorna todos os produtos', async function () {
    const mock = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
    ];
    sinon.stub(connection, 'execute').resolves([mock]);

    const result = await productsModel.findAll();
    expect(result).to.deep.equal(mock);
  });

  it('retorna um produto por id', async function () {
    const mock = { id: 1, name: 'Martelo de Thor' };

    sinon.stub(connection, 'execute').resolves([[mock]]);

    const result = await productsModel.findById(1);
    expect(result).to.deep.equal(mock);
  });
});
