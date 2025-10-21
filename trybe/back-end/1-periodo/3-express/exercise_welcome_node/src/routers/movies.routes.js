const express = require('express');
const path = require('path');

const readJsonData = require('../utils/fs/readJsonData');
const writeJsonData = require('../utils/fs/writeJsonData');
const findNextId = require('../utils/findNextId');

const router = express.Router();

const PATH = path.resolve('src', 'movies.json');

router.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const content = await readJsonData(PATH);

  const movieFound = content.find((movie) => movie.id === Number(id));

  if (!movieFound) return res.status(404).json({ message: 'Filme não econtrado' });

  res.status(200).json(movieFound);
});

router.get('/movies', async (req, res) => {
  const content = await readJsonData(PATH);

  res.status(200).json(content);
});

router.post('/movies', async (req, res) => {
  const content = await readJsonData(PATH);
  const movieContent = req.body;
  const nextId = findNextId(content);
  const newMovie = { id: nextId, ...movieContent };
  const newContent = [...content, newMovie];

  await writeJsonData(PATH, newContent);

  res.status(201).json(newMovie);
});

router.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const content = await readJsonData(PATH);

  const index = content.findIndex((movie) => String(movie.id) === String(id));

  if (index === -1) return res.status(404).json({ message: 'Filme não encontrado' });

  content[index] = { ...content[index], ...updatedData };

  await writeJsonData(PATH, content);

  res.status(200).json(content[index]);
});



module.exports = router;
