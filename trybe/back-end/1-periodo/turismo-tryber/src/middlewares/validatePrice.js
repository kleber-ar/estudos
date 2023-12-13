module.exports = (req, res, next) => {
  const { price } = req.body.description;

  if(price === undefined) {
    return res.status(400).json({ message: 'Price é obrigatório'})
  }

  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json({ message: 'Price deve ser um numero e maior que zero'})
  }

  next();
};