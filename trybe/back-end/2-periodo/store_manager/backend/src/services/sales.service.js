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

module.exports = { getAll, getById };
