// No exemplo à seguir, temos um array chamado products contendo objetos que representam diferentes produtos,
// cada um com as propriedades name e price.

//Podemos usar o método sort para ordenar os objetos com base no preço dos produtos, em ordem crescente.
//Para isso, passamos uma função de comparação como argumento para o método sort.
//Essa função compara os valores da propriedade price de cada objeto (a.price e b.price). Ao final, temos o array de objetos ordenado. 😀

const products = [
  { name: "Notebook", price: 2500 },

  { name: "Celular", price: 1500 },

  { name: "TV", price: 3000 },

  { name: "Fones de ouvido", price: 100 },
];

products.sort((a, b) => a.price - b.price);

console.log(products);

// [

//   { name: 'Fones de ouvido', price: 100 },

//   { name: 'Celular', price: 1500 },

//   { name: 'Notebook', price: 2500 },

//   { name: 'TV', price: 3000 }

// ]

const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];
/* Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente. */

// Adicione seu código aqui

people.sort((personA, personB) => personB.age - personA.age);

console.log(people);
