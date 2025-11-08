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

const updatePost = async (id, email, title, content) => {
  // 1. Busca o usuário que está tentando atualizar
  const user = await User.findOne({ where: { email } });

  // 2. Busca o post E já inclui as associações necessárias para o retorno final
  const postToUpdate = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: ['id', 'name'], through: { attributes: [] } },
    ],
  });

  if (!postToUpdate) {
    return { status: 'NOT_FOUND', data: { message: 'Post not found' } };
  }

  // 3. Verificação de Autorização (usando o postToUpdate)
  if (user.id !== postToUpdate.userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  // 4. Atualização (Não precisa retornar o resultado aqui)
  await BlogPost.update({ title, content }, { where: { id } });

  // 5. Atualiza o objeto postToUpdate com os novos dados
  postToUpdate.title = title;
  postToUpdate.content = content;

  // Como o objeto postToUpdate já tem as associações carregadas, 
  // ele pode ser retornado diretamente, sem a necessidade de uma 
  // nova consulta ao banco de dados (economia de 1 SELECT).
  return { status: 'SUCCESS', data: postToUpdate };
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
