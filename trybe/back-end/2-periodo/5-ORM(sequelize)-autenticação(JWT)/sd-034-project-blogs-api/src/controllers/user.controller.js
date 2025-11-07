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

module.exports = {
  create,
  getAll,
};

