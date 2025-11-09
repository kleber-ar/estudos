const postService = require('../services/post.service');
const statusHTTP = require('../utils/statusHTTP');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { email } = req.user;

    const { status, data } = await postService.create(email, title, content, categoryIds);

    return res.status(statusHTTP(status)).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAll = async (_req, res) => {
  const { status, data } = await postService.getAll();

  return res.status(statusHTTP(status)).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await postService.getById(id);

  return res.status(statusHTTP(status)).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;

  try {
    const { status, data } = await postService.updatePost(userId, id, title, content);
    return res.status(statusHTTP[status]).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;

  const { status, data } = await postService.deletePost(id, email);

  // Se deletado com sucesso, retorna 204 sem body
  if (status === 'DELETED') return res.status(statusHTTP(status)).send();

  return res.status(statusHTTP(status)).json(data);
};

const search = async (req, res) => {
  const { q } = req.query;

  const { status, data } = await postService.searchPosts(q);

  return res.status(statusHTTP(status)).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  search,
};
