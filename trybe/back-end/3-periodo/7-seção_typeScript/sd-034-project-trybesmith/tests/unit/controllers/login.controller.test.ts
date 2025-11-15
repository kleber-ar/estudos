import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import loginController from '../../../src/controllers/login.controller';
import loginService from '../../../src/services/login.service';
import { Request, Response } from 'express';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    sinon.restore();
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  it('Deve retornar 200 e o token em caso de sucesso', async function () {
    req.body = { username: 'John', password: 'secret' };

    sinon.stub(loginService, 'login').resolves({
      status: 'SUCCESSFUL',
      data: { token: 'token-test' },
    });

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ token: 'token-test' });
  });

  it('Deve retornar 400 quando faltar username ou password', async function () {
    req.body = { username: '', password: '' };

    sinon.stub(loginService, 'login').resolves({
      status: 'BAD_REQUEST',
      data: { message: '"username" and "password" are required' },
    });

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message: '"username" and "password" are required',
    });
  });

  it('Deve retornar 401 quando username ou password forem inválidos', async function () {
    req.body = { username: 'John', password: 'wrong' };

    sinon.stub(loginService, 'login').resolves({
      status: 'UNAUTHORIZED',
      data: { message: 'Username or password invalid' },
    });

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(401);
    expect(res.json).to.have.been.calledWith({
      message: 'Username or password invalid',
    });
  });
});
