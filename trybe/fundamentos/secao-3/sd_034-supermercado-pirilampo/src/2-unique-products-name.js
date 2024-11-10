const stockProducts = require('./data.json');

const getUniqueProductsName = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts.map((item) => item.productName);
module.exports = { getUniqueProductsName };
