import { expect } from 'chai';
import sinon from 'sinon';
import productsController from '../../../src/controllers/products.controller';
import productsService from '../../../src/services/products.service';
import statusHTTP from '../../../src/utils/statusHTTP';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Product } from '../../../src/types/Product';

describe('Controller - Products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('retorna 201 e o produto criado', async function () {
    const req = {
      body: {
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
        userId: 1,
      },
    } as any;

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    } as any;

    const mockServiceResponse: ServiceResponse<Product> = {
      status: 'CREATED',
      data: {
        id: 6,
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
        userId: 1,
      },
    };

    sinon.stub(productsService, 'create').resolves(mockServiceResponse);

    await productsController.create(req, res);

    expect(res.status.calledWith(statusHTTP('CREATED'))).to.be.true;
    expect(res.json.calledWith(mockServiceResponse.data)).to.be.true;
  });

  it('retorna o status e mensagem correta quando o status NÃO é CREATED', async function () {
    const req = {
      body: {
        name: 'Produto X',   // TEM QUE SER VALORES VÁLIDOS
        price: '100',
        userId: 99,
      },
    } as any;

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    } as any;

    const mockErrorResponse: ServiceResponse<Product> = {
      status: 'BAD_REQUEST',
      data: { message: 'Dados inválidos' },
    };

    sinon.stub(productsService, 'create').resolves(mockErrorResponse);

    await productsController.create(req, res);

    expect(res.status.calledWith(statusHTTP('BAD_REQUEST'))).to.be.true;
    expect(res.json.calledWith({ message: 'Dados inválidos' })).to.be.true;
  });
});
