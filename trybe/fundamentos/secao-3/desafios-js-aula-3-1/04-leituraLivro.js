/* Ana começou a ler o livro "O guia do mochileiro das galáxias", que tem 208 páginas. Após 2 minutos ela leu 4 páginas. 
Crie um algoritmo que calcula e imprime o tempo em minutos que Ana levará para ler todo o livro seguindo o formato:
Ana levará X minutos para ler o livro todo. */

let person = "Ana";
let book = "Guia do mochileiro das galaxias";
let page = 208;
let pageRead = 4;
let timeInMin = 2;
let endBookTime = (page - pageRead) * (pageRead / timeInMin);

console.log(`${person} levara ${endBookTime} Min para ler o livro.`);
