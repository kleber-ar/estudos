/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');

describe('Controller - Products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('retorna todos os produtos com status 200', async function () {
    const res = {};
    const req = {};

    const mock = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
    ];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAll').resolves({ status: 'SUCCESSFUL', data: mock });

    await productsController.listProducts(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mock)).to.be.true;
  });

  it('retorna um produto pelo id com status 200', async function () {
    const res = {};
    const req = { params: { id: 1 } };

    const mock = { id: 1, name: 'Martelo de Thor' };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getById').resolves({ status: 'SUCCESSFUL', data: mock });

    await productsController.getProductById(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mock)).to.be.true;
  });

  it('retorna 404 quando o produto não existe', async function () {
    const res = {};
    const req = { params: { id: 99 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getById').resolves({
      status: 'NOT_FOUND',
      data: { message: 'Product not found' },
    });

    await productsController.getProductById(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
  });
});
