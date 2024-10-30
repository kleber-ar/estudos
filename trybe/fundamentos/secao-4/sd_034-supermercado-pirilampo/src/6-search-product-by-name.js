const stockProducts = require('./data.json');

const searchProductByName = (product) => {
  // Desenvolva seu código dentro dessa função...
  const findProduct = stockProducts.find(
    (item) => item.productName === product,
  );

  if (!findProduct) {
    return null;
  }

  const formattedPrice = `R$ ${findProduct.price}`;

  return {
    description: findProduct.description,
    formattedPrice,
  };
};
module.exports = { searchProductByName };
