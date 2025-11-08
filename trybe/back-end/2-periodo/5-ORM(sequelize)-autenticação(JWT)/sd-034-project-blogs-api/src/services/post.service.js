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

module.exports = { create };
