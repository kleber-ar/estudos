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

module.exports = { listSales, getSaleById };
