const express = require('express');
const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');

const router = express.Router();

const PATH = path.resolve('src', 'movies.json');

router.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const content = await readJsonData(PATH);
  const movieFound = content.find((movie) => movie.id === id);

  if (!movieFound) return res.status(404).json({ message: 'Filme não econtrado' });

  res.status(200).json(movieFound);
});

module.exports = router;
