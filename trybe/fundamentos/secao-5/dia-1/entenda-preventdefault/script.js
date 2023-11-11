// SELETORES
const hrefLink = document.querySelector("#href");
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");

// Exercicio-1 pare o comportamento padrão do elemento 

hrefLink.addEventListener('click', (event) => {
    event.preventDefault();
});

// Exercicio-2 Faça q somente a letra 'a' e 'A' possa ser digitada

inputText .addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a' && character !== 'A') {
        event.preventDefault();
    }
});

// Exercicio-3 pare o comportamento padrão do elemento 

inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
});
