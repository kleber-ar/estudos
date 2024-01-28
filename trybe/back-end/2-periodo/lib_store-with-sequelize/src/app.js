const express = require('express');

const BooksController = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);
app.post('/books', BooksController.create);
app.put('/books/:id', BooksController.update);
app.delete('/books/:id', BooksController.remove);

module.exports = app;