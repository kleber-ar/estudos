const { saveFavoriteMagicCard } = require('../src/magic');
const favoriteCards = require('../data/favoriteCards');

const restoreFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length);
}

jest.setTimeout(100000);

describe('3 Testes da função saveFavoriteMagicCard', () => {
  afterEach(restoreFavoriteCards);

  it('3.1 Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions();
    await saveFavoriteMagicCard('130553');

    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');

    await saveFavoriteMagicCard('130554');

    expect(favoriteCards).toHaveLength(6);
  });
  it('3.2 Retorna os cards iniciais', () => {
    expect.assertions();

    expect(favoriteCards).toHaveLength(4);
  });
  it('3.3 contain initials names', async () => {
    expect.assertions();

    const expected = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    const actualNames = favoriteCards.map((card) => card.name);

    expect(actualNames).toEqual(expected);
  })
})
