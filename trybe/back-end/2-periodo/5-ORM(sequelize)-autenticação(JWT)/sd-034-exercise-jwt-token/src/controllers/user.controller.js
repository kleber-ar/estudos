const userService = require('../services/user.service');
const statusHTTP = require('../utils/statusHTTP');

const login = async (req, res) => {
  const { username, password } = req.body;
  const { status, data } = await userService.login({ username, password });
  res.status(statusHTTP(status)).json(data);
};

const getMe = async (req, res) => {
  const { username, admin } = req.locals.user;
  res.status(200).json({ username, admin });
};

const topSecret = async (_req, res) => {
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha' });
};

module.exports = {
  login,
  getMe,
  topSecret,
};
