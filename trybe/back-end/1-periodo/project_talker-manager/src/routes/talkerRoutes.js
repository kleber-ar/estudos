
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const validateToken = require('../middlewares/authMiddleware');
const validateTalkerFields = require('../middlewares/validateTalkerFields');
const connection = require('../db/connections');

const router = express.Router();
const dataJson = path.resolve('src', 'talker.json');

router.get('/', async (_req, res,) => {
  try {
    const data = await fs.readFile(dataJson, 'utf-8');
    const talkers = JSON.parse(data);
    return res.status(200).json(talkers || []);
  } catch (error) {
    console.error('Erro ao ler o arquivo talker.json:', error);
    return res.status(500).json({ message: 'deu ruim ' })
  }
})

router.get('/db', async (_req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM talkers');
    const formattedTalkers = rows.map((t) => ({
      id: t.id,
      name: t.name,
      age: t.age,
      talk: {
        watchedAt: t.talk_watched_at,
        rate: t.talk_rate,
      },
    }));
    return res.status(200).json(formattedTalkers);
  } catch (err) {
    console.error('Erro ao buscar palestrantes do banco:', err.message);
    return res.status(500).json({ message: 'Erro ao acessar o banco de dados' });
  }
});

router.get('/search', validateToken, async (req, res) => {
  const isValidDate = (date) => /^\d{2}\/\d{2}\/\d{4}$/.test(date);
  const { q, rate, date } = req.query;

  const data = await fs.readFile(dataJson, 'utf-8');
  let talkers = JSON.parse(data);

  if (rate !== undefined) {
    const rateNumber = Number(rate);

    if (!Number.isInteger(rateNumber) || rateNumber < 1 || rateNumber > 5) {
      return res.status(400).json({
        message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      });
    }

  }

  if (q) talkers = talkers.filter((t) => t.name.includes(q));
  if (rate) talkers = talkers.filter((t) => t.talk && t.talk.rate === Number(rate));
  if (date) {
    if (!isValidDate(date)) return res.status(400).json({
      message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"',
    });

    talkers = talkers.filter((t) => t.talk && t.talk.watchedAt === date);
  }

  return res.status(200).json(talkers);
});

router.patch('/rate/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;

  if (rate === undefined || rate === null) return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) return res.status(400).json({
    message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
  });

  const data = await fs.readFile(dataJson, 'utf-8');
  const talkers = JSON.parse(data);
  const index = talkers.findIndex((t) => t.id === Number(id));
  if (!index === -1) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  talkers[index].talk.rate = rate;
  await fs.writeFile(dataJson, JSON.stringify(talkers));

  return res.status(204).end();
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile(dataJson);
  const talkers = JSON.parse(data);
  const talker = talkers.find((t) => t.id === Number(id));
  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(talker);
})

router.post('/', validateToken, validateTalkerFields, async (req, res) => {
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

router.put('/:id', validateToken, validateTalkerFields, async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const data = await fs.readFile(dataJson, 'utf-8');
  const talkers = JSON.parse(data);

  const index = talkers.findIndex((t) => t.id === Number(id));
  if (index === -1) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  talkers[index] = { id: Number(id), name, age, talk };
  await fs.writeFile(dataJson, JSON.stringify(talkers));

  return res.status(200).json(talkers[index]);
});

router.delete('/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile(dataJson, 'utf-8');
  const talkers = JSON.parse(data);

  const filtered = talkers.filter((t) => t.id !== Number(id));
  await fs.writeFile(dataJson, JSON.stringify(filtered));

  return res.status(204).end();
});

module.exports = router;

