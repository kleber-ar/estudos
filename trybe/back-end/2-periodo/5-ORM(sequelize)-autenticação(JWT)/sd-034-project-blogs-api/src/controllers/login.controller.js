const service = require('../services/login.service');
const statusHTTP = require('../utils/statusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { status, data } = await service.login(email, password);

  return res.status(statusHTTP(status)).json(data);
};

module.exports = { login };
