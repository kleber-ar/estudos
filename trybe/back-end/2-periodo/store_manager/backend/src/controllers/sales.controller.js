const salesService = require('../services/sales.service');
const statusHTTP = require('../utils/statusHTTP');

async function listSales(_req, res) {
  const { status, data } = await salesService.getAll();
  return res.status(statusHTTP(status)).json(data);
}

async function getSaleById(req, res) {
  const { id } = req.params;
  const { status, data } = await salesService.getById(id);
  return res.status(statusHTTP(status)).json(data);
}

const createSale = async (req, res) => {
  const itemsSold = req.body;
  const { status, data } = await salesService.createSale(itemsSold);

  return res.status(statusHTTP(status)).json(data);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.deleteSale(Number(id));

  if (status === 'NO_CONTENT') {
    return res.status(204).end();
  }

  return res.status(statusHTTP(status)).json(data);
};

module.exports = {
  listSales,
  getSaleById,
  createSale,
  deleteSale,
};
