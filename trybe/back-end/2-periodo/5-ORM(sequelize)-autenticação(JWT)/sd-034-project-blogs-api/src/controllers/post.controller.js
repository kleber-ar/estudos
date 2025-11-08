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

module.exports = {
  create,
  getAll,
};
