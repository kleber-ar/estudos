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

module.exports = {
  getAll,
  getById,
  createSale,
  deleteSale,
};
