import { expect } from 'chai';
import sinon from 'sinon';
import usersModel from '../../../src/database/models/user.model';
import bcrypt from 'bcryptjs';
import jwtUtil from '../../../src/utils/jwt';
import loginService from '../../../src/services/login.service';
import { Model } from 'sequelize';
import { ServiceResponse } from '../../../src/types/ServiceResponse';

describe('Service - Login', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Retorna erro 400 se username ou password faltarem', async function () {
    const result = await loginService.login('', '') as ServiceResponse<{ message: string }>;
    expect(result.status).to.equal('BAD_REQUEST');
  });

  it('Retorna UNAUTHORIZED se o usuário não existir', async function () {
    sinon.stub(usersModel, 'findOne').resolves(null);

    const result = await loginService.login('kleber', '123') as ServiceResponse<{ message: string }>;

    expect(result.status).to.equal('UNAUTHORIZED');
    expect(result.data.message).to.equal('Username or password invalid');
  });

  it('Retorna UNAUTHORIZED se a senha for incorreta', async function () {
    sinon.stub(usersModel, 'findOne').resolves({
      dataValues: { id: 1, username: 'kleber', password: 'hashed' },
    } as unknown as Model);

    sinon.stub(bcrypt, 'compareSync').returns(false);

    const result = await loginService.login('kleber', 'errada') as ServiceResponse<{ message: string }>;

    expect(result.status).to.equal('UNAUTHORIZED');
    expect(result.data.message).to.equal('Username or password invalid');
  });

  it('Retorna SUCCESSFUL + token quando login for correto', async function () {
    sinon.stub(usersModel, 'findOne').resolves({
      dataValues: { id: 1, username: 'kleber', password: 'hashed' },
    } as unknown as Model);

    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.stub(jwtUtil, 'sign').returns('token-test');

    const result = await loginService.login('kleber', '123');

    // 🔥 Type guard: garante para o TypeScript que estamos no caso de sucesso
    if (result.status !== 'SUCCESSFUL') {
      throw new Error(`Esperado SUCCESSFUL, recebido ${result.status}`);
    }

    expect(result.data.token).to.equal('token-test');
  });
});
