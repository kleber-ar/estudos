const stockProducts = require('./data.json');

const getLowStockProducts = () =>
  // Desenvolva seu código dentro dessa função...
  stockProducts
    .filter(
      ({ quantityInStock }) => quantityInStock <= 10 && quantityInStock > 0,
    )
    .map((item) => `${item.productName}: ${item.quantityInStock} unidades`);
module.exports = { getLowStockProducts };
