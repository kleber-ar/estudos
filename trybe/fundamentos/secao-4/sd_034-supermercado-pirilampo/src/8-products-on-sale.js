const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  const products = stockProducts.filter((item) => item.onSale === true);

  return products.map((item) => ({
    description: item.description,
    formattedPrice: `R$ ${item.price}`,
    onSale: item.onSale,
  }));
};

module.exports = { getProductsOnSale };
