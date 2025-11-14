import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /users', function () {
  beforeEach(function () { sinon.restore(); });
  it('Retorna 200 e lista todas as pessoas usuárias', async function () {
    const res = await chai.request(app).get('/users');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');

    res.body.forEach((u: any) => {
      expect(u).to.have.property('username');
      expect(u).to.have.property('productIds');
      expect(u.productIds).to.be.an('array');
    });
  });
});
