module.exports = (req, res, next) => {
  const { name } = req.body;

  if(!name) {
    return res.status(400).json({ message: 'Name é obrigatório'})
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'Name tem que haver no minimo 3 caracteres'})
  }

  next();
};