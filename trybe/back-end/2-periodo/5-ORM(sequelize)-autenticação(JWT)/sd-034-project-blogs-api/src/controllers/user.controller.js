const userService = require('../services/user.service');
const statusHTTP = require('../utils/statusHTTP');

const create = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);
  return res.status(statusHTTP(status)).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await userService.getAll();
  return res.status(statusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await userService.getById(id);

  if (!data) {
    return res.status(statusHTTP('NOT_FOUND')).json({ message: 'User does not exist' });
  }

  return res.status(statusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
};

