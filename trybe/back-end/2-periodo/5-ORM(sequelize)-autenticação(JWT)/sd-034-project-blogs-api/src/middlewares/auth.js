const { verify } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  // Esperado: "Bearer token"
  const token = authHeader.split(' ')[1];

  try {
    const decoded = verify(token);
    const { email } = decoded;
    req.user = { email }; // guarda os dados do token para uso futuro
    next();
  } catch (_err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
