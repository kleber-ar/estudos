import { expect } from 'chai';
import sinon from 'sinon';
import productsController from '../../../src/controllers/products.controller';
import productsService from '../../../src/services/products.service';
import statusHTTP from '../../../src/utils/statusHTTP';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Product } from '../../../src/types/Product';
import * as auth from '../../../src/middleware/auth';

describe('Controller - Products', function () {
  beforeEach(() => {
    // Mocka o middleware auth para só chamar next()
    sinon.stub(auth, 'default')
      .callsFake((_req, _res, next: any) => next());
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Create products POST', function () {
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
  })

  describe('Get all products GET', function () {

    it('retorna 200 e a lista de produtos', async function () {
      const req = {} as any;
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
      } as any;

      const mockResponse: ServiceResponse<Product[]> = {
        status: 'SUCCESSFUL',
        data: [
          { id: 1, name: 'Excalibur', price: '10 peças de ouro', userId: 1 },
          { id: 2, name: 'Espada Justiceira', price: '20 peças de ouro', userId: 1 },
        ],
      };

      sinon.stub(productsService, 'getAll').resolves(mockResponse);

      await productsController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(mockResponse.data)).to.be.true;
    });
  });


});
