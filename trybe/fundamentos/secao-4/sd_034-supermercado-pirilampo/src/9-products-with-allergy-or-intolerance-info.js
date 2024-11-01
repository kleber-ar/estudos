const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts.map((item) => ({
    description: item.description,
    formattedPrice: `R$ ${item.price}`,
    ...(item.allergyOrIntolerance && {
      allergyOrIntoleranceMessage: `Pode conter: ${item.allergyOrIntolerance.join(' ')}`,
    }),
  }));
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
