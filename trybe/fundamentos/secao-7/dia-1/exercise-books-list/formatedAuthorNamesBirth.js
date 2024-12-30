const { books } = require("./data/library");

const formatedAuthorNamesBirth = () =>
  // escreva seu código aqui
  books.map((book) => `${book.author.name} - ${book.author.birthYear}`);
module.exports = { formatedAuthorNamesBirth };
