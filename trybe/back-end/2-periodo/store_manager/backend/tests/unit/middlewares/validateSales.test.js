/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const validateSales = require('../../../src/middlewares/validateSales');

describe('Middleware - validateSales', function () {
  const res = {};
  const next = sinon.stub();

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    next.resetHistory();
  });

  afterEach(sinon.restore);

  it('retorna 400 se faltar productId', async function () {
    const req = { body: [{ quantity: 2 }] };

    await validateSales(req, res, next);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: '"productId" is required' })).to.be
      .true;
  });

  it('retorna 400 se faltar quantity', async function () {
    const req = { body: [{ productId: 1 }] };

    await validateSales(req, res, next);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: '"quantity" is required' })).to.be
      .true;
  });

  it('retorna 422 se quantity for <= 0', async function () {
    const req = { body: [{ productId: 1, quantity: 0 }] };

    await validateSales(req, res, next);

    expect(res.status.calledWith(422)).to.be.true;
    expect(
      res.json.calledWith({
        message: '"quantity" must be greater than or equal to 1',
      }),
    ).to.be.true;
  });

  it('retorna 404 se productId não existir', async function () {
    const req = { body: [{ productId: 99, quantity: 1 }] };
    sinon.stub(productsModel, 'findAll').resolves([{ id: 1 }, { id: 2 }]);

    await validateSales(req, res, next);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
  });

  it('chama next() se todos os dados forem válidos', async function () {
    const req = {
      body: [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 5 },
      ],
    };
    sinon.stub(productsModel, 'findAll').resolves([{ id: 1 }, { id: 2 }]);

    await validateSales(req, res, next);

    expect(next.calledOnce).to.be.true;
  });
});
