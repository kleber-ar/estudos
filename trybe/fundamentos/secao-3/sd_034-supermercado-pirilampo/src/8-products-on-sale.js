const stockProducts = require('./data.json');

const getProductsOnSale = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts
    .filter(({ onSale }) => onSale)
    .map((product) => ({
      description: product.description,
      formattedPrice: `R$ ${product.price}`,
      onSale: product.onSale,
    }));
module.exports = { getProductsOnSale };
