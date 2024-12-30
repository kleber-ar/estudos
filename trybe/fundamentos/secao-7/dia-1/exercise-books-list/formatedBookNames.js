const { books } = require("./data/library");

const formatedBookNames = () =>
  // escreva seu código aqui
  books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
module.exports = { formatedBookNames };
