const express = require('express');

const employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.get('/employees', employee.getAll);
app.get('/employees/:id', employee.getById);

module.exports = app;