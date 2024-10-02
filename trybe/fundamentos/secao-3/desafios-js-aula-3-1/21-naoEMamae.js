/* Desenvolva um algoritmo que verifica se a mamãe é a Nat. Caso não seja a Nat, exibir 'Não é mamãe!'. */

function isMom(valor) {
  if (valor !== "Nat") {
    return "Não é a mamãe!";
  } else {
    return "MAMÃE!!";
  }
}

console.log(isMom("Nat"));

