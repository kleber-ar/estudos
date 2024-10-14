/* Escreva um algoritmo que faça conversão de temperatura em graus Celsius para graus Fahrenheit. DICA: A conversão deve ser a temperatura em graus Celsius dividido por 5, o resultado multiplicado por 9 somado com 32.
Exiba o resultado no console. */

function convert(c) {
  let f = (c / 5) * 9 + 32;

  return f;
}

console.log(convert(20));
