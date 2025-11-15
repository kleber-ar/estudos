import { expect } from 'chai';
import sinon from 'sinon';
import usersController from '../../../src/controllers/users.controller';
import usersService from '../../../src/services/users.service';
import * as auth from '../../../src/middleware/auth';

describe('Controller - Users', function () {
  beforeEach(() => {
    // Mocka o middleware auth para só chamar next()
    sinon.stub(auth, 'default')
      .callsFake((_req, _res, next: any) => next());
  });

  afterEach(() => sinon.restore());

  it('retorna 200 e lista de usuários', async function () {
    const req = {} as any;
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    } as any;

    const mockResponse = {
      status: 'SUCCESSFUL',
      data: [
        { username: 'Hagar', productIds: [1, 2] },
        { username: 'Eddie', productIds: [3, 4] },
      ],
    };

    sinon.stub(usersService, 'getAll').resolves({
      status: 'SUCCESSFUL',
      data: [
        { username: 'Hagar', productIds: [1, 2] },
        { username: 'Eddie', productIds: [3, 4] },
      ],
    });

    await usersController.getAll(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(mockResponse.data)).to.be.true;
  });
});
