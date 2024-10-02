/* Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
Imprima no console seguindo o exemplo: "A pessoa é maior de idade". */

function idade(idade) {
  if (idade >= 18) {
    return "De maior";
  } else {
    return "De menor";
  }
}

console.log(idade(20));

