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

  it('retorna status 201 e o produto criado', async function () {
    const req = { body: { name: 'ProdutoX' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    sinon.stub(productsService, 'createProduct').resolves({
      status: 'CREATED',
      data: { id: 4, name: 'ProdutoX' },
    });

    await productsController.createProduct(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith({ id: 4, name: 'ProdutoX' })).to.be.true;
  });

  it('retorna 200 se o produto for atualizado com sucesso', async function () {
    const req = { params: { id: 1 }, body: { name: 'Martelo do Batman' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    sinon.stub(productsService, 'updateProduct').resolves({
      status: 200,
      data: { id: 1, name: 'Martelo do Batman' },
    });

    await productsController.updateProduct(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith({ id: 1, name: 'Martelo do Batman' })).to.be.true;
  });
});
