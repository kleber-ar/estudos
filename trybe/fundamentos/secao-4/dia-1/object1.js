// 1 - {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:
//“Julia tem 1 livro favorito.”

// 2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

//{

//  title: 'Harry Potter e o Prisioneiro de Azkaban',

//  author: 'JK Rowling',

//  publisher: 'Rocco',

//}

// 3 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
  ],
};

reader.favoriteBooks.length <= 1
  ? console.log(
      `${reader.name} tem ${reader.favoriteBooks.length} livro favorito`,
    )
  : console.log(
      `${reader.name} tem ${reader.favoriteBooks.length} livros favorito`,
    );

reader.favoriteBooks.push({
  title: "Harry Potter e o Prisioneiro de Azkaban",
  author: "JK Rowling",
  publisher: "Rocco",
});

const listBooks = reader.favoriteBooks.map((book) => book.title).join(", ");

console.log(`Os livros favoritos de ${reader.name} são: ${listBooks}`);
