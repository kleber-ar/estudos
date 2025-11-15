import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import jwt from '../../../src/utils/jwt';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(() => {
    sinon.stub(jwt, 'verify').returns({ id: 1, userName: 'kleber' });
  });

  afterEach(function () { sinon.restore(); });

  it('Retorna 200 e a lista de produtos', async function () {
    const response = await chai.request(app)
      .get('/products')
      .set('Authorization', 'token-falso'); // << ADICIONA ISSO

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.have.keys(['id', 'name', 'price', 'userId']);
  });
});
