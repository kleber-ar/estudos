/*  Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let nota = 80;

if (nota < 0 || nota > 100 ){
    console.log('Nada a ver isso ai');

} else if (nota >= 90) {
    console.log('Resultado: A');

} else if (nota >= 80) {
    console.log('Resultado: B');

} else if (nota >= 70) {
    console.log('Resultado: C');

} else if (nota >= 60) {
    console.log('Resultado: D');

} else if (nota >= 50) {
    console.log('Resultado: E');

} else {
    console.log('Resultado: F');
}