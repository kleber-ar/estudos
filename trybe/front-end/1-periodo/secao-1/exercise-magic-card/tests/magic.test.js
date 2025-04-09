require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('1 Testa a função getMagicCard', () => {
  it('1.1 Get magic is a function?!', () => {
    expect(typeof getMagicCard).toBe('function');
  });
  it('1.2 fetch is called?!', async () => {
    await getMagicCard('130550');

    expect(fetch).toHaveBeenCalled();
  });
  it('1.3 End point is correct ?!', async () => {
    await getMagicCard('130550');

    expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');
  })
});

describe('2 Testando o retorno da função getMagicCard', () => {
  it('2.1 Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    // implemente seus testes aqui

    expect(response.name).toBe('Ancestor\'s Chosen');

  });
});

