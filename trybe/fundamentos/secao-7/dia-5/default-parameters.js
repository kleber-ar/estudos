/* Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro. */

const multiply = (number1, number2 = 1) => {
    // Escreva aqui a sua função
    return number1 * number2;
  };
  
  console.log(multiply(8));