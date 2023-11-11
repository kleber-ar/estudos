/*Percorra o array imprimindo todos os valores contidos nele com a função console.log().

Some todos os valores contidos no array e imprima o resultado.

Calcule e imprima a média aritmética dos valores contidos no array.

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

Utilizando for, descubra o maior valor contido no array e imprima-o.

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

Utilizando for, descubra o menor valor contido no array e imprima-o.

Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorN = numbers[0];
let menorN = numbers[0];
let impar = 0;
let imparN = [];
let par = 0;
let parN = [];

// soma,média e quantidade de dados dentro do array

for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
  media = soma / numbers.length;

  //--------------

  // O maior e menor numero dentro do array

  if (numbers[index] > maiorN) {
    maiorN = numbers[index];
  } else if (numbers[index] < menorN) {
    menorN = numbers[index];
  }

  //--------------

  // Quantidade de par e impares.

  if (numbers[index] % 2 !== 0) {
    impar += 1;
    imparN.push(index);
  } else if (numbers[index] % 2 === 0) {
    par += 1;
    parN.push(index);
  }
  //---------------
}

console.log(numbers);
console.log("Numeros pares:", par);
console.log(parN);
console.log("Numeros impares:", impar);
console.log(imparN);
console.log("Menor numero:", menorN);
console.log("Maior numero:", maiorN);
console.log("Quantidade de dados:", numbers.length);
console.log("Soma dos dados:", soma);
console.log("Média:", media);

if (media > 20) {
  console.log("Média é maior do que 20.");
} else {
  console.log("Média é menor ou igual do que 20.");
}

//Acrescentando com for e push mais 25 numeros

let novos = [];
let novosD = [];

for (let index = 1; index <= 25; index++) {
  novos.push(index);
}

console.log(novos);

//-------------

// dividindo cada numero por 2
for (let index = 0; index < novos.length; index++) {
  novosD.push(novos[index] / 2);
}

console.log(novosD);

//--------------

//Fatoraão de 10 a 1

let fatora = 1;

for (let index = 10; index > 0; index--) {
  fatora *= index;
}

console.log(fatora);

//---------------

//forma de inverter palavras

let word = "Socorram-me, Subi No Ônibus Em Marrocos.";
let reverse = "";

for (let index = 0; index < word.length; index++) {
  reverse += word[word.length - 1 - index];
}

console.log(reverse);

//--

// segungo jeito de reverter com manipulaão de string

reverse = word.split("").reverse().join("");

console.log(reverse);

//-------------

// Contagem da maior e menor palavra dentro de um array

let array = ["java", "javascript", "python", "html", "css"];

let maiorP = array[0];
let menorP = array[0];

for (let index = 1; index < array.length; index++) {
  if (array[index].length > maiorP.length) {
    maiorP = array[index];
  } else if (array[index].length < menorP.length) {
    menorP = array[index];
  }
}
console.log(array);
console.log("A menor palavra:", menorP);
console.log("A meior palavra:", maiorP);

//---------------------

// Maior numero primo

let maiorPrimo = 0;

for (let index = 50; index >= 2; index--) {
  let primo = true;

  for (let divisor = 2; divisor < index; divisor++) {
    if (index % divisor === 0) {
      primo = false;
    }
  }

  if (primo) {
    maiorPrimo = index;
    break;
  }
}
console.log('Maior numero primo de "2"até "50":', maiorPrimo);
