const { Op } = require('sequelize');
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
  return { status: 'SUCCESS', data: posts };
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

  return { status: 'SUCCESS', data: post };
};


const updatePost = async (userId, id, title, content) => {

  const post = await BlogPost.findByPk(id);
  if (userId !== post.userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  await BlogPost.update({ title, content }, { where: { id } });
  const newPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return { status: 'SUCCESS', data: newPost };
};

const deletePost = async (id, email) => {
  const post = await BlogPost.findByPk(id);
  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }

  const user = await User.findOne({ where: { email } });
  if (user.id !== post.userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  await BlogPost.destroy({ where: { id } });
  return { status: 'DELETED', data: null }; // DELETED mapeado para 204
};

const searchPosts = async (query) => {
  // Se query estiver vazio, retorna todos os posts
  if (!query) {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return { status: 'SUCCESS', data: posts };
  }

  // Busca pelo título ou conteúdo usando LIKE
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 'SUCCESS', data: posts };
};

module.exports = {
  create,
  getAll,
  getById,
  updatePost,
  deletePost,
  searchPosts,
};
