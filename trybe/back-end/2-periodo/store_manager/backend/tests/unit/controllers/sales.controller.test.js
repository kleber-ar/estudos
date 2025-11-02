/* eslint-disable no-unused-expressions */
const { expect } = require('chai');

const sinon = require('sinon');
const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');

describe('Controller - Sales', function () {
  afterEach(function () { sinon.restore(); });

  it('retorna todas as vendas com status 200', async function () {
    const req = {};
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    const mock = [
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2,
      },
    ];

    sinon.stub(salesService, 'getAll').resolves({ status: 'SUCCESSFUL', data: mock });

    await salesController.listSales(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mock)).to.be.true;
  });

  it('retorna uma venda por id com status 200', async function () {
    const req = { params: { id: 1 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    const mock = [
      {
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2,
      },
    ];

    sinon.stub(salesService, 'getById').resolves({ status: 'SUCCESSFUL', data: mock });

    await salesController.getSaleById(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mock)).to.be.true;
  });

  it('retorna erro 404 ao não encontrar venda', async function () {
    const req = { params: { id: 999 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    const mock = { message: 'Sale not found' };

    sinon.stub(salesService, 'getById').resolves({ status: 'NOT_FOUND', data: mock });

    await salesController.getSaleById(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith(mock)).to.be.true;
  });

  it('Retorna status 201 e a venda criada', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 5 },
      ],
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const mockSale = {
      id: 3,
      itemsSold: req.body,
    };

    sinon.stub(salesService, 'createSale').resolves({
      status: 'CREATED',
      data: mockSale,
    });

    await salesController.createSale(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith(mockSale)).to.be.true;
  });

  it('retorna 404 quando a venda não existe', async function () {
    const req = { params: { id: 999 } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    sinon.stub(salesService, 'deleteSale').resolves({
      status: 'NOT_FOUND',
      data: { message: 'Sale not found' },
    });

    await salesController.deleteSale(req, res);

    expect(res.status.calledWith(404)).to.equal(true);
    expect(res.json.calledWith({ message: 'Sale not found' })).to.equal(true);
  });

  it('retorna 204 quando a venda é deletada com sucesso', async function () {
    const req = { params: { id: 1 } };
    const res = {
      status: sinon.stub().returnsThis(),
      end: sinon.stub(),
    };

    sinon.stub(salesService, 'deleteSale').resolves({ status: 'NO_CONTENT' });

    await salesController.deleteSale(req, res);

    expect(res.status.calledWith(204)).to.equal(true);
    expect(res.end.calledOnce).to.equal(true);
  });

  it('retorna 400 se quantity for undefined', async function () {
    const req = { params: { saleId: 1, productId: 2 }, body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    sinon.stub(salesService, 'updateQuantity').resolves({
      status: 'BAD_REQUEST',
      data: { message: '"quantity" is required' },
    });

    await salesController.updateQuantity(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: '"quantity" is required' })).to.be.true;
  });

  it('retorna 422 se quantity <= 0', async function () {
    const req = { params: { saleId: 1, productId: 2 }, body: { quantity: 0 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    sinon.stub(salesService, 'updateQuantity').resolves({
      status: 'INVALID_VALUE',
      data: { message: '"quantity" must be greater than or equal to 1' },
    });

    await salesController.updateQuantity(req, res);
    expect(res.status.calledWith(422)).to.be.true;
  });

  it('retorna 404 se produto não estiver na venda', async function () {
    const req = { params: { saleId: 1, productId: 999 }, body: { quantity: 5 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    sinon.stub(salesService, 'updateQuantity').resolves({
      status: 'NOT_FOUND',
      data: { message: 'Product not found in sale' },
    });

    await salesController.updateQuantity(req, res);
    expect(res.status.calledWith(404)).to.be.true;
  });

  it('retorna 200 se atualizar com sucesso', async function () {
    const req = { params: { saleId: 1, productId: 2 }, body: { quantity: 20 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

    sinon.stub(salesService, 'updateQuantity').resolves({
      status: 'SUCCESSFUL',
      data: {
        date: '2023-05-06T03:14:28.000Z',
        productId: 2,
        quantity: 20,
        saleId: 1,
      },
    });

    await salesController.updateQuantity(req, res);
    expect(res.status.calledWith(200)).to.be.true;
  });
});
