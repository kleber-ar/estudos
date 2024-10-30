const stockProducts = require('./data.json');

const getOutOfStockProducts = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts
    .filter((item) => item.quantityInStock === 0)
    .map((item) => item.productName);
module.exports = { getOutOfStockProducts };
