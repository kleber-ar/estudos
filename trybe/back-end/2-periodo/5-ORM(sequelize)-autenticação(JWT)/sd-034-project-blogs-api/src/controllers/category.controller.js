const categoryService = require('../services/category.service');
const statusHTTP = require('../utils/statusHTTP');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name || name.length === 0) {
    return res
      .status(statusHTTP('BAD_REQUEST'))
      .json({ message: '"name" is required' });
  }

  const { status, data } = await categoryService.create(name);
  return res.status(statusHTTP(status)).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await categoryService.getAll();
  return res.status(statusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
};
