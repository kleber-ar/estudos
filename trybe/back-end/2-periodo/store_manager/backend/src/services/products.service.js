const productsModel = require('../models/products.model');

async function getAll() {
  const products = await productsModel.findAll();
  return { status: 'SUCCESSFUL', data: products };
}

async function getById(id) {
  const product = await productsModel.findById(id);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: product };
}

const createProduct = async (name) => {
  if (!name) {
    return { status: 'INVALID_VALUE', data: { message: '"name" is required' } };
  }

  if (name.length < 5) {
    return {
      status: 'INVALID_VALUE',
      data: { message: '"name" length must be at least 5 characters long' },
    };
  }

  const newProduct = await productsModel.insert(name);
  return { status: 'CREATED', data: newProduct };
};

module.exports = {
  getAll,
  getById,
  createProduct,
};
