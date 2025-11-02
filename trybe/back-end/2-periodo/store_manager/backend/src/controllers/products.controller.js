const productsService = require('../services/products.service');
const statusHTTP = require('../utils/statusHTTP');

async function listProducts(_req, res) {
  const { status, data } = await productsService.getAll();
  return res.status(statusHTTP(status)).json(data);
}

async function getProductById(req, res) {
  const { id } = req.params;
  const { status, data } = await productsService.getById(id);
  return res.status(statusHTTP(status)).json(data);
}

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { status, data } = await productsService.createProduct(name);

  return res.status(statusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // validações básicas do corpo
  if (name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.length < 5) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  const { status, data } = await productsService.updateProduct(id, name);
  return res.status(status).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.deleteProduct(Number(id));

  if (status === 'NO_CONTENT') {
    return res.status(statusHTTP(status)).end(); // 204 sem body
  }

  return res.status(statusHTTP(status)).json(data);
};

module.exports = {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
