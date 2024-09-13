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
let media = 0;
let maiorN = 0;
let menorN = 0;
let par = 0;
let parN = [];
let impar = 0;
let imparN = [];
let newArray = [];
let divisaoNewArray = [];

// Pecorrer array 

for (let index = 0; index < numbers.length; index ++) {
  soma += numbers[index];
  media = soma / numbers.length;

 // Menor e maior Numeros

  if (numbers[index] > maiorN) {
    maiorN = numbers[index]
  } else if (numbers[index] < menorN) {
    menorN = numbers[index]
  }

 // Numeros pares e impares

  if (numbers[index] % 2 === 0) {
    par += 1;
    parN.push(numbers[index]);
  } else {
    impar += 1;
    imparN.push(numbers[index]);
  }

}

console.log("Numeros:\n", numbers)
console.log("-----------")
console.log("Soma deles:", soma)
console.log("-----------")
console.log("Média:", parseInt(media))
console.log("-----------")
console.log("Maior numero:", maiorN)
console.log("Menor numero:", menorN)
console.log("-----------")
console.log("Pares:", par, "\nEles são:", parN)
console.log("Impares:", impar, "\nEles são:", imparN)
console.log("-----------")

// Novo array

for (let index = 1; index <= 25; index++) {
  newArray.push(index);
  divisaoNewArray.push(index / 2);
}

console.log("Novo array:", newArray)
console.log("Divisão de cada numero:", divisaoNewArray)

// Fatora de 10 a 1.

let fatora = 1;

for (let index = 10; index > 0; index--) {
  fatora *= index;
}

console.log("Fatora de 10 a 1:", fatora.toLocaleString('pt-BR'));

// Números primos de 2 a 50

let primos = []; 

for (let index = 2; index <= 50; index++) {
  let primo = true

  for (let divisor = 2; divisor < index; divisor ++) {
    if (index % divisor === 0) {
      primo = false;
    }
  }

  if (primo) {
    primos.push(index);
  }
}

console.log("Primos do 2 a 50:", primos)
