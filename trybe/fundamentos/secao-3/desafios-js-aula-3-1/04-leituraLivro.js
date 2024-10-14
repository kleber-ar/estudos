/* Ana começou a ler o livro "O guia do mochileiro das galáxias", que tem 208 páginas. Após 2 minutos ela leu 4 páginas. 
Crie um algoritmo que calcula e imprime o tempo em minutos que Ana levará para ler todo o livro seguindo o formato:
Ana levará X minutos para ler o livro todo. */

let person = "Jensen";
let book = "O guia do mochileiro das galáxias";
let pages = 208;
let readed = 4;
let timeInMin = 2;

let totalTime = (pages - readed) * (readed / timeInMin);

console.log(totalTime);
