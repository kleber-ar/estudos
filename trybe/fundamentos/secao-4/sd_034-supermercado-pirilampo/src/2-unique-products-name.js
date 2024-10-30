const stockProducts = require('./data.json');

const getUniqueProductsName = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts.map((valor) => valor.productName);
module.exports = { getUniqueProductsName };
