// Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

//usando o concat

const concat = () => {
  // retorne seu código aqui
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
};

console.log(concat());

//usando o flat

const flat = () => {
  return arrays.flat();
};

console.log(flat());

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

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

const namesString = () => {
  return books.reduce((acc, book, index) => {
    if (index === books.length - 1) {
      return `${acc}${book.author.name}`;
    }
    return `${acc}${book.author.name}, `;
  }, "");
};

console.log(namesString());

/* // 3 - Calcule a média de idade que as pessoas autoras tinham quando 
seus respectivos livros foram lançados. */

const averageAge = () => {
  const numberOfBooks = books.length;

  const sumOfAges = books.reduce((sum, book) => {
    return sum + (book.releaseYear - book.author.birthYear);
  }, 0)

  return sumOfAges / numberOfBooks;
}

console.log(averageAge());

// 4 - Encontre o livro com o maior nome.

const largestNameBook = () => {
  return books.reduce((biggestBook, currBook) => {
    return currBook.name.length > biggestBook.name.length ? currBook : biggestBook;
  })
}

console.log(largestNameBook());