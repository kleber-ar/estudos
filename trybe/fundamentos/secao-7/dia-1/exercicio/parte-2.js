/* Organizando uma biblioteca

Estes exercícios praticam os conceitos de Higher Order Functions associados a outros temas de fundamentos já vistos, como arrow functions, template literals e objetos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios! */

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947);
};

console.log(authorBornIn1947());

// Retorne o nome do livro de menor nome.

const smallerName = () => {
  let nameBook;

  books.forEach ((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}

console.log(smallerName());

// Encontre o primeiro livro cujo nome possua 26 caracteres.

const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook());

/* Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário. */

const everyoneWasBornOnSecXX = () => {
  return books.every((book) => book.author.birthYear >= 1900 && book.author.birthYear <= 1999);
}

console.log((everyoneWasBornOnSecXX()));

/* Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. */

const bookFrom80s = () => {
  return  books.some((book) => book.releaseYear >= 1980 && book. releaseYear <= 1989);
} 

console.log(bookFrom80s());

/* Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário. */

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());