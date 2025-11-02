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
});
