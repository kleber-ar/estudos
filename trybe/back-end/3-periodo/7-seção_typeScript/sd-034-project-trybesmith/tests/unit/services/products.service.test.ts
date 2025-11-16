import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/services/products.service';
import productsModel from '../../../src/database/models/product.model';
import * as auth from '../../../src/middleware/auth';

describe('Service - Products', function () {
  beforeEach(() => {
    // Mocka o middleware auth para apenas chamar next()
    sinon.stub(auth, 'default').callsFake((_req, _res, next: any) => next());
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Create products POST', function () {
    it('Cria um produto e retorna ServiceResponse corretamente', async function () {
      const mockDBResponse = {
        dataValues: {
          id: 6,
          name: 'Martelo de Thor',
          price: '30 peças de ouro',
          userId: 1,
        },
      };

      sinon.stub(productsModel, 'create').resolves(mockDBResponse as any);

      const result = await productsService.create({
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
        userId: 1,
      });

      expect(result.status).to.equal('CREATED');
      expect(result.data).to.deep.equal({
        id: 6,
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
        userId: 1,
      });
    });

    it('Retorna BAD_REQUEST se name não informado', async function () {
      const result = await productsService.create({
        price: '30 peças de ouro',
        userId: 1,
      } as any);

      expect(result.status).to.equal('BAD_REQUEST');
      expect(result.data).to.deep.equal({ message: '"name" is required' });
    });

    it('Retorna BAD_REQUEST se price não informado', async function () {
      const result = await productsService.create({
        name: 'Martelo de Thor',
        userId: 1,
      } as any);

      expect(result.status).to.equal('BAD_REQUEST');
      expect(result.data).to.deep.equal({ message: '"price" is required' });
    });

    it('Retorna BAD_REQUEST se userId não informado', async function () {
      const result = await productsService.create({
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
      } as any);

      expect(result.status).to.equal('BAD_REQUEST');
      expect(result.data).to.deep.equal({ message: '"userId" is required' });
    });

    it('Retorna UNPROCESSABLE_ENTITY se name não for string', async function () {
      const result = await productsService.create({
        name: 123,
        price: '30 peças de ouro',
        userId: 1,
      } as any);

      expect(result.status).to.equal('UNPROCESSABLE_ENTITY');
      expect(result.data).to.deep.equal({ message: '"name" must be a string' });
    });

    it('Retorna UNPROCESSABLE_ENTITY se price não for string', async function () {
      const result = await productsService.create({
        name: 'Martelo de Thor',
        price: 30,
        userId: 1,
      } as any);

      expect(result.status).to.equal('UNPROCESSABLE_ENTITY');
      expect(result.data).to.deep.equal({ message: '"price" must be a string' });
    });

    it('Retorna UNPROCESSABLE_ENTITY se name tiver menos de 3 caracteres', async function () {
      const result = await productsService.create({
        name: 'Ma',
        price: '30 peças de ouro',
        userId: 1,
      } as any);

      expect(result.status).to.equal('UNPROCESSABLE_ENTITY');
      expect(result.data).to.deep.equal({ message: '"name" length must be at least 3 characters long' });
    });

    it('Retorna UNPROCESSABLE_ENTITY se price tiver menos de 3 caracteres', async function () {
      const result = await productsService.create({
        name: 'Martelo de Thor',
        price: '30',
        userId: 1,
      } as any);

      expect(result.status).to.equal('UNPROCESSABLE_ENTITY');
      expect(result.data).to.deep.equal({ message: '"price" length must be at least 3 characters long' });
    });

    it('Retorna UNPROCESSABLE_ENTITY se userId não for número', async function () {
      const result = await productsService.create({
        name: 'Martelo de Thor',
        price: '30 peças de ouro',
        userId: 'abc',
      } as any);

      expect(result.status).to.equal('UNPROCESSABLE_ENTITY');
      expect(result.data).to.deep.equal({ message: '"userId" must be a number' });
    });
  });

  describe('Get all products GET', function () {
    it('Retorna todos os produtos com status SUCCESSFUL', async function () {
      const mockProducts = [
        { get: () => ({ id: 1, name: 'Excalibur', price: '10 peças de ouro', userId: 1 }) },
        { get: () => ({ id: 2, name: 'Espada Justiceira', price: '20 peças de ouro', userId: 1 }) },
      ];

      sinon.stub(productsModel, 'findAll').resolves(mockProducts as any);

      const result = await productsService.getAll();

      expect(result.status).to.equal('SUCCESSFUL');
      expect(result.data).to.deep.equal([
        { id: 1, name: 'Excalibur', price: '10 peças de ouro', userId: 1 },
        { id: 2, name: 'Espada Justiceira', price: '20 peças de ouro', userId: 1 },
      ]);
    });
  });
});
