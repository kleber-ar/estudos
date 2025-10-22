
module.exports = (req, res, next) => {
  const { price } = req.body;

  if (!price) {
    return res.status(400).json(
      { message: 'Campo price obrigatório' },
    );
  }

  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json(
      { message: 'Deve conter price e ser maior que 0' }
    )
  }

  next()
}
