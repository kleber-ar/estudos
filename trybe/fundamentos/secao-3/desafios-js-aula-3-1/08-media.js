/* Faça um algoritmo que calcule a média das 3 notas de uma pessoa estudante e mostre, além do valor da média, uma mensagem de “Aprovação”, caso a média seja igual ou superior a 6, ou a mensagem “Reprovação”, caso a média das notas seja inferior a 6. Exiba no seguinte formato:
Aprovação, média: 7 ou Reprovação, média: 5. */

let notas = [6, 6, 6];
let soma = notas.reduce((acc, cur) => acc + cur, 0);
let media = soma / notas.length;

if (media >= 6) {
  console.log("Aprovado\n", "Média:", media.toFixed(1));
} else {
  console.log("Reprovado\n", "Média:", media.toFixed(1));
}

