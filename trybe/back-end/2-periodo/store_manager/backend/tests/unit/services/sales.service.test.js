const { expect } = require('chai');
const sinon = require('sinon');
const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service');

describe('Service - Sales', function () {
  afterEach(function () { sinon.restore(); });

  it('retorna todas as vendas com sucesso', async function () {
    const mock = [
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2,
      },
    ];

    sinon.stub(salesModel, 'findAll').resolves(mock);

    const result = await salesService.getAll();
    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(mock);
  });

  it('retorna uma venda por id com sucesso', async function () {
    const mock = [
      {
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2,
      },
    ];

    sinon.stub(salesModel, 'findById').resolves(mock);

    const result = await salesService.getById(1);
    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(mock);
  });

  it('retorna erro ao não encontrar a venda', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);

    const result = await salesService.getById(999);
    expect(result.status).to.equal('NOT_FOUND');
    expect(result.data).to.deep.equal({ message: 'Sale not found' });
  });

  it('Cria uma venda com sucesso', async function () {
    const mockSale = {
      id: 3,
      itemsSold: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 5 },
      ],
    };

    sinon.stub(salesModel, 'insert').resolves(mockSale);

    const result = await salesService.createSale(mockSale.itemsSold);

    expect(result.status).to.equal('CREATED');
    expect(result.data).to.deep.equal(mockSale);
  });

  it('retorna status NOT_FOUND quando a venda não existe', async function () {
    sinon.stub(salesModel, 'deleteById').resolves(0);

    const result = await salesService.deleteSale(999);

    expect(result.status).to.equal('NOT_FOUND');
    expect(result.data).to.deep.equal({ message: 'Sale not found' });
  });

  it('retorna status NO_CONTENT quando a venda é deletada', async function () {
    sinon.stub(salesModel, 'deleteById').resolves(1);

    const result = await salesService.deleteSale(1);

    expect(result.status).to.equal('NO_CONTENT');
  });
});
