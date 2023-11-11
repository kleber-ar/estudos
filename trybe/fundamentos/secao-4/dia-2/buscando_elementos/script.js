// acessar o elemento "where-are-you"

const whereAreYou = document.querySelector('#where-are-you');

console.log(whereAreYou);

// Acesse parent a partir de where-are-you e adicione uma color a ele.

const parent = whereAreYou.parentElement;

parent.style.color = 'red';

// Acesse o first-child-of-child e adicione um texto a ele.
// Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'First child of child';

// Acesse o first-child a partir de parent.

const firstChild = parent.firstElementChild;

console.log(firstChild);

// Acesse o first-child a partir de where-are-you.

const primeiroFilho2 = whereAreYou.previousElementSibling;

console.log(primeiroFilho2);

// Acesse o texto Attention! a partir de where-are-you.
const textElement = whereAreYou.nextSibling;

console.log(textElement);

// Acesse o third-child a partir de where-are-you.
const thirdChild = whereAreYou.nextElementSibling;

console.log(thirdChild);

// Acesse o third-child a partir de parent.
const thirdChild2 = parent.lastElementChild.previousElementSibling;

console.log(thirdChild2);

