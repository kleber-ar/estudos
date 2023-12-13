const fs = require('fs/promises');

const apiCredentials = async (req, res, next) => {
  try {
    const token = req.header('X-API-TOKEN');
    const authData = await fs.readFile('./authdata.json', { encoding: 'utf-8' });
    const authorized = JSON.parse(authData);

    if (token in authorized) {
      req.teams = authorized[token];
      next();
    } else {
      res.sendStatus(401).json({ message: 'Token inválido ou expirado' });
    }
  } catch (error) {
    console.error('Error reading or parsing authdata:', error);
    res.sendStatus(500);
  }
};

module.exports = apiCredentials;
