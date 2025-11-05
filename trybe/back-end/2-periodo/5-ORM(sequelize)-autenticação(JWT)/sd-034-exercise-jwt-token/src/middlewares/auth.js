const auth = require('../utils/auth');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === undefined) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const user = auth.verify(token);
    req.locals = { user };
    next();
  } catch (error) {
    return res.status(401).json({ error: { message: 'jwt malformed' } });
  }
};
