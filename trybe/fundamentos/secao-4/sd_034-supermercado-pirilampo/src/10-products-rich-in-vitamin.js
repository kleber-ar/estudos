const stockProducts = require('./data.json');

const getProductsRichInVitamin = () =>
  stockProducts
    .map((item) => {
      if (item.nutritionalInfo.vitamins) {
        const vitaminsInformation = Object.entries(
          item.nutritionalInfo.vitamins,
        ).map(([vitamin, quantity]) => `${vitamin} - ${quantity}`);

        return {
          description: item.description,
          formattedPrice: `R$ ${item.price}`,
          vitaminsInformation,
        };
      }

      return null;
    })
    .filter((item) => item !== null);
module.exports = { getProductsRichInVitamin };
