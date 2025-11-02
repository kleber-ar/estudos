const salesModel = require('../models/sales.model');

async function getAll() {
  const sales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: sales };
}

async function getById(id) {
  const sale = await salesModel.findById(id);

  if (sale.length === 0) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };

  return { status: 'SUCCESSFUL', data: sale };
}

const createSale = async (itemsSold) => {
  const newSale = await salesModel.insert(itemsSold);
  return { status: 'CREATED', data: newSale };
};

const deleteSale = async (id) => {
  const deleted = await salesModel.deleteById(id);

  if (deleted === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }

  return { status: 'NO_CONTENT' };
};

const updateQuantity = async (saleId, productId, quantity) => {
  if (quantity === undefined) {
    return { status: 'BAD_REQUEST', data: { message: '"quantity" is required' } };
  }

  if (quantity <= 0) {
    return {
      status: 'INVALID_VALUE',
      data: { message: '"quantity" must be greater than or equal to 1' },
    };
  }

  const saleProduct = await salesModel.findSaleProduct(saleId, productId);
  if (!saleProduct) {
    const saleExists = await salesModel.findById(saleId);
    if (!saleExists.length) {
      return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
    }
    return { status: 'NOT_FOUND', data: { message: 'Product not found in sale' } };
  }

  await salesModel.updateQuantity(saleId, productId, quantity);
  const updated = await salesModel.findSaleProduct(saleId, productId);
  return { status: 'SUCCESSFUL', data: updated };
};

module.exports = {
  updateQuantity,
  getAll,
  getById,
  createSale,
  deleteSale,
};
