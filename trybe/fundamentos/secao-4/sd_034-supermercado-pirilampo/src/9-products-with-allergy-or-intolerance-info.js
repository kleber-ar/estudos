const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts.map((item) => {
    const productInfo = {
      description: item.description,
      formattedPrice: `R$ ${item.price}`,
    };

    if (item.allergyOrIntolerance) {
      productInfo.allergyOrIntoleranceMessage = `Pode conter: ${item.allergyOrIntolerance.join(' ')}`;
    }

    return productInfo;
  });
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
