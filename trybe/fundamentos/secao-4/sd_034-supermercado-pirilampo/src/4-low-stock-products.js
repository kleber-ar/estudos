const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  const product = stockProducts.filter(
    (item) => item.quantityInStock <= 10 && item.quantityInStock > 0,
  );

  return product.map(
    (item) => `${item.productName}: ${item.quantityInStock} unidades`,
  );
};

module.exports = { getLowStockProducts };
