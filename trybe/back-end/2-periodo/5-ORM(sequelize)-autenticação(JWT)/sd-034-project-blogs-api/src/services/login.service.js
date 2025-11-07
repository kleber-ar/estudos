const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const login = async (email, password) => {
  if (!email || !password) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }

  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }

  const token = createToken({ email: user.email });

  return { status: 'SUCCESS', data: { token } };
};

module.exports = { login };
