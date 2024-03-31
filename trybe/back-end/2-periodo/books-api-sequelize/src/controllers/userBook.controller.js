const service = require('../services/userBook.service');

const getUsersBooksById = async (req, res) => {
  const { id } =  req.params;
  const user = await service.getUsersBooksById(id);

  if (!user) {
    return res.status(404).json({ message: 'Usuario não encontrado'});
  }

  return res.status(200).json(user);
};

module.exports = {
  getUsersBooksById,
};