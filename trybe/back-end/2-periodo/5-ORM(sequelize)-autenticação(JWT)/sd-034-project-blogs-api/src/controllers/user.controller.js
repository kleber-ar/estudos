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

const deleteMe = async (req, res) => {
  const { email } = req.user;

  // chama o service passando apenas o email
  await userService.deleteUser(email);

  // retorna status 204 sem conteúdo
  return res.status(204).send();
};

module.exports = {
  create,
  getAll,
  getById,
  deleteMe,
};
