const productsService = require('../services/products.service');
const statusHTTP = require('../utils/statusHTTP');

async function listProducts(_req, res) {
  const { status, data } = await productsService.getAll();
  return res.status(statusHTTP(status).json(data));
}

async function getProductById(req, res) {
  const { id } = req.params;
  const { status, data } = await productsService.getById(id);
  return res.status(statusHTTP(status).json(data));
}

module.exports = { listProducts, getProductById };
