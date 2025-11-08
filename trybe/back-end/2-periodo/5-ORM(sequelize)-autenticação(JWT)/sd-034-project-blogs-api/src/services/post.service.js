const { BlogPost, PostCategory, Category, User } = require('../models');

const create = async (email, title, content, categoryIds) => {
  const categoriesExists = await Category.findAll({ where: { id: categoryIds } });
  if (categoriesExists.length !== categoryIds.length) {
    return { status: 'INVALID_VALUE', data: { message: 'one or more "categoryIds" not found' } };
  }

  const user = await User.findOne({ where: { email } });
  const post = await BlogPost.create({ title, content, userId: user.id });

  await PostCategory.bulkCreate(categoryIds.map((categoryId) => ({
    postId: post.id,
    categoryId,
  })));

  return { status: 'CREATED', data: post };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  return { status: 'SUCCESSFUL', data: posts };
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }, // remove PostCategory
    ],
  });

  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }

  return { status: 'SUCCESSFUL', data: post };
};

module.exports = {
  create,
  getAll,
  getById,
};
