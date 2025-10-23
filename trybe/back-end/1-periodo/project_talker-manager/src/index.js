const express = require('express');
const fs = require('fs').promises;
const path = require('path');

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
    return res.status(404).json({ message: 'deu ruim ' }, error)
  }
})


