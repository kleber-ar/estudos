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

  it('Insere uma nova venda com sucesso', async function () {
    // Simula o retorno do INSERT na tabela "sales"
    const executeStub = sinon.stub(connection, 'execute');

    executeStub
      .onFirstCall()
      .resolves([{ insertId: 3 }]); // Primeira query (inserindo em "sales")

    executeStub
      .onSecondCall()
      .resolves([{ affectedRows: 1 }]); // Primeira linha em "sales_products"
    executeStub
      .onThirdCall()
      .resolves([{ affectedRows: 1 }]); // Segunda linha em "sales_products"

    const itemsSold = [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 5 },
    ];

    const result = await salesModel.insert(itemsSold);

    expect(result).to.deep.equal({
      id: 3,
      itemsSold,
    });

    // Garante que foram feitas 3 queries no total (1 em sales + 2 em sales_products)
    expect(executeStub.callCount).to.equal(3);

    // Verifica se a primeira query foi a correta
    expect(executeStub.firstCall.args[0]).to.include('INSERT INTO sales');
  });
});
