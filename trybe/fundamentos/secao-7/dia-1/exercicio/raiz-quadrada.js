//Dado um array de números, crie uma função que retorne um novo array com as raízes quadradas dos números.
//No entanto, se um número for negativo,
//a função deve substituí-lo por NaN (Não é um Número).

const numbers = [4, 9, -1, 16, -5, 25];

function raiz(numbers) {
  return numbers.map((number) => (number < 0 ? NaN : Math.sqrt(number)));
}

console.log(raiz(numbers));
