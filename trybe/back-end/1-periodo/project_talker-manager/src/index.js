const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log(`Online ${PORT}`);
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/', routes);

