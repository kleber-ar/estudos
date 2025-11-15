import { expect } from 'chai';
import sinon from 'sinon';
import usersService from '../../../src/services/users.service';
import UserModel from '../../../src/database/models/user.model';
import ProductModel from '../../../src/database/models/product.model';
import * as auth from '../../../src/middleware/auth';

describe('Service - Users', function () {
  beforeEach(() => {
    // Mocka o middleware auth para só chamar next()
    sinon.stub(auth, 'default')
      .callsFake((_req, _res, next: any) => next());
  });

  afterEach(() => sinon.restore());

  it('retorna usuários com seus productIds', async function () {
    const mockUsers = [
      { get: () => ({ id: 1, username: 'Hagar' }) },
      { get: () => ({ id: 2, username: 'Eddie' }) },
    ];

    const mockProductsUser1 = [
      { get: () => ({ id: 1 }) },
      { get: () => ({ id: 2 }) },
    ];

    const mockProductsUser2 = [
      { get: () => ({ id: 3 }) },
      { get: () => ({ id: 4 }) },
    ];

    sinon.stub(UserModel, 'findAll').resolves(mockUsers as any);
    sinon.stub(ProductModel, 'findAll')
      .onFirstCall().resolves(mockProductsUser1 as any)
      .onSecondCall().resolves(mockProductsUser2 as any);

    const result = await usersService.getAll();

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal([
      { username: 'Hagar', productIds: [1, 2] },
      { username: 'Eddie', productIds: [3, 4] },
    ]);
  });
});
