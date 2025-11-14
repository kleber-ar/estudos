// tests/unit/services/products.service.test.ts
import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/services/products.service';
import productsModel from '../../../src/database/models/product.model';

describe('Service - Products', function () {
  afterEach(function () {
    sinon.restore();
  });

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
});
