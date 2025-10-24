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
  response.status(200).send();
});

app.use('/', routes);

// Middleware para rotas não encontradas (404)
app.use((req, res) => res.sendStatus(404));

// Middleware de tratamento de erros (500)
app.use((err, req, res, next) => {
  console.error(err); // loga o erro no console
  res.status(500).json({ message: 'Erro interno no servidor' });
});
