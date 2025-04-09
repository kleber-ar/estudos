const getMagicCardUrl = (cardId) => `https://api.magicthegathering.io/v1/cards/${cardId}`;

const getMagicCard = async (cardId) => {
  try {
    const url = getMagicCardUrl(cardId);
    const response = await fetch(url);
    const data = await response.json();

    const { name, manaCost, types, subtypes, rarity } = data.card;

    return {
      name,
      manaCost,
      types,
      subtypes,
      rarity,
    };
  } catch (error) {
    return error;
  }
};

const cardId = process.argv[2];

if (!cardId) {
  console.log('Precisa do ID');
  process.exit(1);
}

getMagicCard(cardId)
  .then((card) => {
    console.log(card);
  })

const fetch = require('node-fetch');
const favoriteCards = require('../data/favoriteCards.js')

const saveFavoriteMagicCard = async (cardId) => {
  try {
    const url = getMagicCardUrl(cardId);
    const response = await fetch(url);
    const data = await response.json();

    const { name, manaCost, types, subtypes, rarity } = data.card;

    favoriteCards.push({
      name,
      manaCost,
      types,
      subtypes,
      rarity,
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getMagicCard,
  saveFavoriteMagicCard,
};
