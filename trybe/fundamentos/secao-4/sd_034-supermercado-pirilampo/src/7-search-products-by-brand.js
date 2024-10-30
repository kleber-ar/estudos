const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  // Desenvolva seu código dentro dessa função...
  const products = stockProducts.filter((item) => item.brand === brand);

  if (!products) return [];

  return products.map((item) => ({
    description: item.description,
    formattedPrice: `R$ ${item.price}`,
  }));
};

module.exports = { searchProductsByBrand };
