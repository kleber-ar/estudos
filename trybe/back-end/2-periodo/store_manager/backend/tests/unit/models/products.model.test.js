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

  it('insere um novo produto', async function () {
    const mockInsertId = 4;
    sinon.stub(connection, 'execute').resolves([{ insertId: mockInsertId }]);

    const result = await productsModel.insert('ProdutoX');

    expect(result).to.deep.equal({ id: 4, name: 'ProdutoX' });
  });

  it('atualiza o produto com sucesso', async function () {
    const executeStub = sinon.stub(connection, 'execute').resolves();

    await productsModel.update(1, 'Martelo do Batman');

    expect(
      executeStub.calledWithExactly(
        'UPDATE products SET name = ? WHERE id = ?',
        ['Martelo do Batman', 1],
      ),
    ).to.equal(true);
  });

  it('remove o produto com sucesso', async function () {
    const executeStub = sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const result = await productsModel.remove(1);

    expect(executeStub.calledOnce).to.equal(true);
    expect(result).to.equal(1);
  });
});
