const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const teams = require('./utils/teams');
const teamsRouter = require('./routes/teamsRouter');

const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: 'Numero de requisiçoes excedidas',
});

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('./images'));
app.use(express.json());
app.use(apiCredentials);
app.use('/teams', teamsRouter);

app.get('/', (req, res) => res.status(200).json({ message: 'Olá mundo!' }));

app.get('/teams', (req, res, next) => {
  try {
    res.json(teams);
  } catch (error) {
    return next(error);
  }
});

app.post('/teams', validateTeam, (req, res) => {
  if (!req.teams.teams.includes(req.body.sigla) 
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa silga' });
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;