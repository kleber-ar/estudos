const productsModel = require('../models/products.model');

async function getAll() {
  const products = await productsModel.findAll();
  return products;
}

async function getById(id) {
  const product = await productsModel.findById(id);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  return product;
}

module.exports = { getAll, getById };
