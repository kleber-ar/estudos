import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';

// 🔥 IMPORTA O MESMO OBJETO QUE O SERVICE IMPORTA
import usersModel from '../../../src/database/models/user.model';

import bcrypt from 'bcryptjs';
import jwt from '../../../src/utils/jwt';
chai.use(chaiHttp);

describe.only('POST /login - Integração', function () {
  beforeEach(() => {
    // Usuário simulado que EXISTE
    sinon.stub(usersModel, 'findOne').resolves({
      dataValues: {
        id: 1,
        username: 'kleber',
        password: 'hashedpass',
      },
    } as any);

    // bcrypt retorna true (senha correta)
    sinon.stub(bcrypt, 'compareSync').returns(true);

    // jwt gera um token de mentira
    sinon.stub(jwt, 'sign').returns('token123');
  });

  afterEach(() => sinon.restore());

  it('Retorna 400 se username não for enviado', async function () {
    const res = await chai.request(app)
      .post('/login')
      .send({ password: '123456' });

    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('"username" and "password" are required');
  });

  it('Retorna 400 se password não for enviado', async function () {
    const res = await chai.request(app)
      .post('/login')
      .send({ username: 'kleber' });

    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('"username" and "password" are required');
  });

  it('Retorna 401 se usuário não existir', async function () {
    (usersModel.findOne as any).restore();  // <-- ESSENCIAL

    sinon.stub(usersModel, 'findOne').resolves(null);

    const res = await chai.request(app)
      .post('/login')
      .send({ username: 'fake', password: 'wrong' });

    expect(res.status).to.equal(401);
    expect(res.body.message).to.equal('Username or password invalid');
  });

  it('Retorna 200 e um token válido', async function () {
    const res = await chai.request(app)
      .post('/login')
      .send({ username: 'kleber', password: '123456' });

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ token: 'token123' });
  });
});
