const stockProducts = require('./data.json');

const getOutOfStockProducts = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts
    .filter(({ quantityInStock }) => quantityInStock === 0)
    .map(({ productName }) => productName);
module.exports = { getOutOfStockProducts };
