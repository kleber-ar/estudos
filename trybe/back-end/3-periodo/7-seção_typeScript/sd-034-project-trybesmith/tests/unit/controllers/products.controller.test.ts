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
    // Mocka o middleware auth para apenas chamar next()
    sinon.stub(auth, 'default').callsFake((_req, _res, next: any) => next());
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Create products POST', function () {
    it('Retorna 201 e o produto criado', async function () {
      const req = { body: { name: 'Martelo de Thor', price: '30 peças de ouro', userId: 1 } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'CREATED',
        data: { id: 6, name: 'Martelo de Thor', price: '30 peças de ouro', userId: 1 },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('CREATED'))).to.be.true;
      expect(res.json.calledWith(mockServiceResponse.data)).to.be.true;
    });

    it('Retorna BAD_REQUEST se name não informado', async function () {
      const req = { body: { price: '30 peças de ouro', userId: 1 } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'BAD_REQUEST',
        data: { message: '"name" is required' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('BAD_REQUEST'))).to.be.true;
      expect(res.json.calledWith({ message: '"name" is required' })).to.be.true;
    });

    it('Retorna BAD_REQUEST se price não informado', async function () {
      const req = { body: { name: 'Martelo de Thor', userId: 1 } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'BAD_REQUEST',
        data: { message: '"price" is required' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('BAD_REQUEST'))).to.be.true;
      expect(res.json.calledWith({ message: '"price" is required' })).to.be.true;
    });

    it('Retorna BAD_REQUEST se userId não informado', async function () {
      const req = { body: { name: 'Martelo de Thor', price: '30 peças de ouro' } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'BAD_REQUEST',
        data: { message: '"userId" is required' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('BAD_REQUEST'))).to.be.true;
      expect(res.json.calledWith({ message: '"userId" is required' })).to.be.true;
    });

    it('Retorna UNPROCESSABLE_ENTITY se name não for string', async function () {
      const req = { body: { name: 123, price: '30 peças de ouro', userId: 1 } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'UNPROCESSABLE_ENTITY',
        data: { message: '"name" must be a string' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('UNPROCESSABLE_ENTITY'))).to.be.true;
      expect(res.json.calledWith({ message: '"name" must be a string' })).to.be.true;
    });

    it('Retorna UNPROCESSABLE_ENTITY se price não for string', async function () {
      const req = { body: { name: 'Martelo de Thor', price: 30, userId: 1 } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'UNPROCESSABLE_ENTITY',
        data: { message: '"price" must be a string' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('UNPROCESSABLE_ENTITY'))).to.be.true;
      expect(res.json.calledWith({ message: '"price" must be a string' })).to.be.true;
    });

    it('Retorna UNPROCESSABLE_ENTITY se name tiver menos de 3 caracteres', async function () {
      const req = { body: { name: 'Ma', price: '30 peças de ouro', userId: 1 } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'UNPROCESSABLE_ENTITY',
        data: { message: '"name" length must be at least 3 characters long' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('UNPROCESSABLE_ENTITY'))).to.be.true;
      expect(res.json.calledWith({ message: '"name" length must be at least 3 characters long' })).to.be.true;
    });

    it('Retorna UNPROCESSABLE_ENTITY se price tiver menos de 3 caracteres', async function () {
      const req = { body: { name: 'Martelo de Thor', price: '30', userId: 1 } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'UNPROCESSABLE_ENTITY',
        data: { message: '"price" length must be at least 3 characters long' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('UNPROCESSABLE_ENTITY'))).to.be.true;
      expect(res.json.calledWith({ message: '"price" length must be at least 3 characters long' })).to.be.true;
    });

    it('Retorna UNPROCESSABLE_ENTITY se userId não for número', async function () {
      const req = { body: { name: 'Martelo de Thor', price: '30 peças de ouro', userId: 'abc' } } as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

      const mockServiceResponse: ServiceResponse<Product> = {
        status: 'UNPROCESSABLE_ENTITY',
        data: { message: '"userId" must be a number' },
      };

      sinon.stub(productsService, 'create').resolves(mockServiceResponse);

      await productsController.create(req, res);

      expect(res.status.calledWith(statusHTTP('UNPROCESSABLE_ENTITY'))).to.be.true;
      expect(res.json.calledWith({ message: '"userId" must be a number' })).to.be.true;
    });
  });

  describe('Get all products GET', function () {
    it('Retorna 200 e a lista de produtos', async function () {
      const req = {} as any;
      const res = { status: sinon.stub().returnsThis(), json: sinon.stub() } as any;

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
