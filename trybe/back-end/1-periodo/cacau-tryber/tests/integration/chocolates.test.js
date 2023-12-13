const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando API Cacau-Trybe', () => {
  sinon.stub(fs.promises, 'readFile').resolves(mockFile);

  afterEach(() => {
    sinon.restore();
  });

  describe('Usando o método GET', () => {
    it('Lista de /chocolates', async () => {
      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(JSON.parse(mockFile).chocolates);
    });

    it('busca pelo ID 4 e retorna Mounds', async () => {
      const response = await chai.request(app).get('/chocolates/4');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    });

    it('busca por um id inexistente e retorna error message', async () => {
      const response = await chai.request(app).get('/chocolates/99');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    });
  
    it('busca por um brandId 1 e retorna os chocolates da marca', async () => {
      const response = await chai.request(app).get('/chocolates/brand/1');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
    
    it('Retorna o total de chocolates', async () => {
    const response = await chai.request(app).get('/chocolates/total');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
    
    it('retorna os chocolates que contém "Mo" end point search', async () => {
      const response = await chai.request(app).get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ]);

    });

    it('Retorna um array vazio caso não encontre', async () => {
      const response = await chai.request(app).get('/chocolates/search?name=zzz');
  
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
      });

  });

  describe('Usando o método PUT', () => {
    it('Atualiza/edita um chocolate', async () => {
      const response = await chai
        .request(app)
        .put('/chocolates/1').send({
          name: 'Mint Pretty Good',
          brandId: 2,
        });
  
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      });
    });
  
    it('Se o chocolate não existe, gere um erro', async () => {
      const response = await chai
        .request(app)
        .put('/chocolates/66').send({
          name: 'Mint Pretty Good',
          brandId: 2,
        });
  
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'chocolate not found' });
    });

  });
  

});