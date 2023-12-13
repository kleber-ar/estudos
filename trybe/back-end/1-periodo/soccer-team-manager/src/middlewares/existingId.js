const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);

  if (!teams.some((t) => t.id === id)) {
    res.sendStatus(404).json({ message: 'Time não encontrado' });
  }
  next();
};

module.exports = existingId;