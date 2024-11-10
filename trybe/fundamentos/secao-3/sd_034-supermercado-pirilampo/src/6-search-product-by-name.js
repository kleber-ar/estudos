const stockProducts = require('./data.json');

const searchProductByName = (product) => {
  // Desenvolva seu código dentro dessa função...
  const findProduct = stockProducts.find(
    ({ productName }) => productName === product,
  );

  if (!findProduct) return null;

  return {
    description: findProduct.description,
    formattedPrice: `R$ ${findProduct.price}`,
  };
};
module.exports = { searchProductByName };
