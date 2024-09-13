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
let maior = 0;
let menor = numbers[0];
let pares = 0;
let par = [];
let impares = 0;
let impar = [];

for (let index = 0; index < numbers.length; index++) {
  soma += numbers[index];
  media = soma / numbers.length;

  if (numbers[index] > maior) {
    maior = numbers[index]
  } else if (numbers[index] < menor) {
    menor = numbers[index]
  }

  if (numbers[index] % 2 === 0) {
    pares++
    par.push(numbers[index])
  } else {
    impares++
    impar.push(numbers[index])
  }
}

console.log("Os números:", numbers)
console.log("A soma deles:", soma)
console.log("A média deles:", parseInt(media))
console.log("O maior deles:", maior)
console.log("O menor deles:", menor)
console.log("Contem", pares, "pares. São eles:", par)
console.log("Contem", impares, "impares. São eles:", impar)

let fat = 1;
let div = [];

for (let index = 1; index <= 10; index++) {
  fat *= index
  div.push(index / 2)
}

console.log("Fatoração de 1 a 10:", fat)
console.log("Divisão de 1 a 10 por 2:", div)

let primos = [];
let quantPrimos = 0;
let noPrimos = [];
let quantNoPrimos = 0;

for (let index = 2; index <= 50; index++) {
  let isPrimo = true

  for (let divisor = 2; divisor < index; divisor++) {
    if (index % 2 === 0) {
      isPrimo = false
    }
  }

  if (isPrimo) {
    quantPrimos++
    primos.push(index)
  }else {
    quantNoPrimos++
    noPrimos.push(index);
  }
}

console.log("Contem", quantPrimos, "números primos. São eles:", primos)
console.log("Contem", quantNoPrimos, "números não primos. São eles:", noPrimos)

for (let index = 1; index < numbers.length; index++) {
  
  for (let segIndex = 0; segIndex < index; segIndex++) {

    if (numbers[index] < numbers[segIndex]) {
      let posicao = numbers[index]
      numbers[index] = numbers[segIndex]
      numbers[segIndex] = posicao
    }
  }

}

console.log(numbers)

numbers.sort((a,b) => a - b);

console.log(numbers)

