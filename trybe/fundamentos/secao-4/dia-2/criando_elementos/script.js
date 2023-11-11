// Crie um irmão para `elementoOndeVoceEsta`.

const pai = document.querySelector('#pai');
const irmaoElementeOndeVoceEsta = document.createElement('section');
irmaoElementeOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementeOndeVoceEsta);

console.log(pai);

// Crie um filho para `elementoOndeVoceEsta`.

const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('div');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

console.log(elementoOndeVoceEsta);

// Crie um filho para `primeiroFilhoDoFilho`.

const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('div');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

console.log(primeiroFilhoDoFilho);

// A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoDoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;

console.log(terceiroFilho);