const productsModel = require('../models/products.model');

async function getAll() {
  const products = await productsModel.findAll();
  return { status: 'SUCCESSFUL', products };
}

async function getById(id) {
  const product = await productsModel.findById(id);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
}

module.exports = { getAll, getById };
