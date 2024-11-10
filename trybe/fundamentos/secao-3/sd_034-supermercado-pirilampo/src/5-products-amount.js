const stockProducts = require('./data.json');

const getProductsAmount = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts.reduce((acc, cur) => acc + cur.quantityInStock, 0);
module.exports = { getProductsAmount };
