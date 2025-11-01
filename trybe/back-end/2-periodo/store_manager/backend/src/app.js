const express = require('express');

const productsRouter = require('./routers/products.router');
const salesRouter = require('./routers/sales.router');

const app = express();
app.use(express.json());// tem por pro POST funcionar.

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;
