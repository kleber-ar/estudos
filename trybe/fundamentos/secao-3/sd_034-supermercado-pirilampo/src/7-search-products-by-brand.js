const stockProducts = require('./data.json');

const searchProductsByBrand = (item) =>
  // Desenvolva seu código dentro dessa função...
  stockProducts
    .filter(({ brand }) => brand === item)
    .map((product) => ({
      description: product.description,
      formattedPrice: `R$ ${product.price}`,
    }));
module.exports = { searchProductsByBrand };
