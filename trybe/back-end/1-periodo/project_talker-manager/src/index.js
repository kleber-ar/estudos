const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateToken = require('./middlewares/validateToken');
const validateTalkerFields = require('./middlewares/validateTalkerFields');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log('Online');
});

const dataJson = path.resolve('src', 'talker.json');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res,) => {
  try {
    const data = await fs.readFile(dataJson, 'utf-8');
    const talkers = JSON.parse(data);

    if (talkers.lenght === 0) return res.status(200).json([]);

    return res.status(200).json(talkers);
  } catch (error) {
    console.error('Erro ao ler o arquivo talker.json:', error);
    return res.status(500).json({ message: 'deu ruim ' })
  }
})

app.get('/talker/search', validateToken, async (req, res) => {
  const { q, rate } = req.query;

  const data = await fs.readFile(dataJson, 'utf-8');
  const talkers = JSON.parse(data);

  if (rate !== undefined) {
    const rateNumber = Number(rate);

    if (!Number.isInteger(rateNumber) || rateNumber < 1 || rateNumber > 5) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      });
    }

  }

  let filtered = talkers;

  if (q) {
    filtered = filtered.filter((t) => t.name.includes(q));
  }

  if (rate) {
    filtered = filtered.filter((t) => t.talk && t.talk.rate === Number(rate));
  }

  return res.status(200).json(filtered);
});

app.get('/talker/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const data = await fs.readFile(dataJson);
    const talkers = JSON.parse(data);
    const talker = talkers.find((t) => t.id === Number(id));

    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    return res.status(200).json(talker);
  } catch (error) {
    console.error('Erro ao buscar palestrante:', error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
})

app.post('/login', validateEmail, validatePassword, (req, res) => {
  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token });
})

app.post('/talker', validateToken, validateTalkerFields, async (req, res) => {
  const { name, age, talk } = req.body;

  const data = await fs.readFile(dataJson, 'utf-8');
  const talkers = JSON.parse(data);

  const newTalker = {
    id: talkers.length ? talkers[talkers.length - 1].id + 1 : 1,
    name,
    age,
    talk,
  };

  talkers.push(newTalker);
  await fs.writeFile(dataJson, JSON.stringify(talkers));

  return res.status(201).json(newTalker);
});



app.put('/talker/:id', validateToken, validateTalkerFields, async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const data = await fs.readFile(dataJson, 'utf-8');
  const talkers = JSON.parse(data);

  const talkerIndex = talkers.findIndex((t) => t.id === Number(id));

  if (talkerIndex === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  const updatedTalker = { id: Number(id), name, age, talk };
  talkers[talkerIndex] = updatedTalker;

  await fs.writeFile(dataJson, JSON.stringify(talkers));

  return res.status(200).json(updatedTalker);
});



app.delete('/talker/:id', validateToken, async (req, res) => {
  const { id } = req.params;

  const data = await fs.readFile(dataJson, 'utf-8');
  const talkers = JSON.parse(data);

  const filteredTalkers = talkers.filter((t) => t.id !== Number(id));

  await fs.writeFile(dataJson, JSON.stringify(filteredTalkers));

  return res.status(204).end();
});
