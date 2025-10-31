const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');

describe('Service - Products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('retorna todos os produtos com sucesso', async function () {
    const mock = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
    ];

    sinon.stub(productsModel, 'findAll').resolves(mock);

    const result = await productsService.getAll();

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(mock);
  });

  it('retorna um produto pelo id com sucesso', async function () {
    const mock = { id: 1, name: 'Martelo de Thor' };

    sinon.stub(productsModel, 'findById').resolves(mock);

    const result = await productsService.getById(1);

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(mock);
  });

  it('retorna NOT_FOUND quando o produto não existe', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);

    const result = await productsService.getById(99);

    expect(result.status).to.equal('NOT_FOUND');
    expect(result.data).to.deep.equal({ message: 'Product not found' });
  });
});
