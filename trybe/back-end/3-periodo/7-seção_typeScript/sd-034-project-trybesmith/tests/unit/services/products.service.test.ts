import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/services/products.service';
import productsModel from '../../../src/database/models/product.model';
import * as auth from '../../../src/middleware/auth';

describe('Service - Products', function () {
  beforeEach(() => {
    // Mocka o middleware auth para só chamar next()
    sinon.stub(auth, 'default')
      .callsFake((_req, _res, next: any) => next());
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Create products POST', function () {
    it('cria um produto e retorna ServiceResponse corretamente', async function () {
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
  })

  describe('Get all products GET', function () {
    it('Retorna todos os produtos com status SUCCESSFUL', async function () {
      const mockProducts = [
        {
          get: () => ({ id: 1, name: 'Excalibur', price: '10 peças de ouro', userId: 1 })
        },
        {
          get: () => ({ id: 2, name: 'Espada Justiceira', price: '20 peças de ouro', userId: 1 })
        },
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
