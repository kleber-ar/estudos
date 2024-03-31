const { User, Book } = require('../models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  includes: { model: Book, as: 'book', through: { attributes: [] } },
});

module.exports = {
  getUsersBooksById,
};