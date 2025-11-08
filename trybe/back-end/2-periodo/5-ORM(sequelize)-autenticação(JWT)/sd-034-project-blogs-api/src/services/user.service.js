const { User } = require('../models');
const { createToken } = require('../utils/jwt');

const createUser = async ({ displayName, email, password, image }) => {
  // verifica se email já existe
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  // cria o usuário no banco
  await User.create({ displayName, email, password, image });

  const token = createToken(email);

  return { status: 'CREATED', data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] }, // remove password
  });

  return { status: 'SUCCESS', data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESS', data: user };
};

const deleteUser = async (email) => {
  await User.destroy({ where: { email } });

  return { status: 'DELETED', data: { message: `User ${email} deleted` } };
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};
