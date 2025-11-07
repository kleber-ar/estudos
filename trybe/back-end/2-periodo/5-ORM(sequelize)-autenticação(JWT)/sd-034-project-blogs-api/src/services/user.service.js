const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const createUser = async ({ displayName, email, password, image }) => {
  // verifica se email já existe
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  // cria o usuário no banco
  const newUser = await User.create({ displayName, email, password, image });

  const token = createToken({ email: newUser.email });

  return { status: 'CREATED', data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] }, // remove password
  });

  return { status: 'SUCCESS', data: users };
};

module.exports = {
  createUser,
  getAll,
};
