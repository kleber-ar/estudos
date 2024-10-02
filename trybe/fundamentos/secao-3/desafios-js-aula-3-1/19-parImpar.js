/* Crie um algoritmo que descubra se um número é por ou ímpar.
Exiba o resultado no seguinte formato: "O número X é par." */

function isPar(valor) {
  if (valor % 2 !== 0) {
    return `O número ${valor} é impar`;
  } else {
    return `O número ${valor} é par`;
  }
}

console.log(isPar(18));

