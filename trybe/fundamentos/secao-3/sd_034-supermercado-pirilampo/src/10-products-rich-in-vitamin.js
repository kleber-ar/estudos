const stockProducts = require('./data.json');

const getProductsRichInVitamin = () =>
  stockProducts
    .filter((item) => item.nutritionalInfo.vitamins)
    .map((item) => ({
      description: item.description,
      formattedPrice: `R$ ${item.price}`,
      vitaminsInformation: Object.entries(item.nutritionalInfo.vitamins).map(
        ([vitamin, quantity]) => `${vitamin} - ${quantity}`,
      ),
    }));

module.exports = { getProductsRichInVitamin };
