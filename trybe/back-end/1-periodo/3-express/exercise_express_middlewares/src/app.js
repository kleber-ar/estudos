const express = require('express');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescription = require('./middlewares/validateDescription');
const validateDateFormat = require('./middlewares/validateDateFormat');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const generateToken = require('./ultils/generateToken');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;

// não remova e nem modifique esse endpoint
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateDateFormat,
  validateRating,
  validateDifficulty,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  });

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;
