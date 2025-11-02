const { expect } = require('chai');

const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model');

describe('Model - Sales', function () {
  afterEach(sinon.restore);

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

  it('deleta uma venda existente com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await salesModel.deleteById(1);

    expect(result).to.equal(1);
    expect(connection.execute.calledOnce).to.equal(true);
  });

  it('retorna 0 quando a venda não existe', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

    const result = await salesModel.deleteById(999);

    expect(result).to.equal(0);
  });

  it('atualiza a quantidade com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await salesModel.updateQuantity(1, 2, 10);

    expect(result).to.equal(1);
    expect(connection.execute.calledOnce).to.equal(true);
  });

  it('retorna o produto da venda', async function () {
    sinon.stub(connection, 'execute').resolves([
      [
        { saleId: 1, productId: 2, quantity: 10, date: '2023-05-06T03:14:28.000Z' },
      ],
    ]);

    const result = await salesModel.findSaleProduct(1, 2);

    expect(result).to.have.property('productId', 2);
    expect(result).to.have.property('quantity', 10);
  });
});
