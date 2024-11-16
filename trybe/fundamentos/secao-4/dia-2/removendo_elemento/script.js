// Remova o elemnto 'where-are-you'.

// Seleciona o elemento que deseja remover
const whereAreYou = document.getElementById("where-are-you");

// Remove o elemento diretamente usando o método remove()
whereAreYou.remove();

// Outra forma (caso precise do elemento pai):
// const parent = whereAreYou.parentElement;
// parent.removeChild(whereAreYou);

