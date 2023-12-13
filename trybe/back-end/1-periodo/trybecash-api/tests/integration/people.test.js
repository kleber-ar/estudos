const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

describe('testando Trybecash', () => {
  afterEach(sinon.restore);

  describe('Testando o método POST', () => {

    it('Cadastro de pessoa', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
  
      const response = await chai
        .request(app)
        .post('/people')
        .send(
          {
            firstName: 'Luke',
            lastName: 'Skywalker',
            email: 'luke.skywalker@trybe.com',
            phone: '851 678 4453',
          },
        );
      
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal({ message: 'Pessoa cadastrada com sucesso com o id 42' })
    });
  })
  
  describe('Testando o método GET', () => {

    it('Listagem de pessoas', async () => {
      sinon.stub(connection, 'execute').resolves([peopleList]);
  
      const response = await chai.request(app).get('/people')
      
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(peopleList);
    });

    it('Listagem de pessoa por ID', async () => {
      sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);
  
      const response = await chai.request(app).get('/people/1')
      
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(peopleList[0]);
    });
  })

  describe('Testando o método PUT', () => {

    it('Alteração de uma pessoa pelo ID', async () => {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1}]);
  
      const response = await chai.request(app).put('/people/1')
        .send(
          {
            firstName: 'Lucão',
            lastName: 'Andarilho dos céus',
            email: 'lucao.andarilho@trybe.com',
            phone: '851 678 4453',
          },
        );
      
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ message: 'Pessoa com ID:1 atualizada' });
    });

    it('Excluindo uma pessoa', async () => {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1}]);
  
      const response = await chai.request(app).delete('/people/1')
      
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ message: 'Pessoa com ID:1 excluída' });
    });
  })

});