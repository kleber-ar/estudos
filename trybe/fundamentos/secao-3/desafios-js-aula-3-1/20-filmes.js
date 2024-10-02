/* Desenvolva um programa para que a pessoa possa escolher um filme para assistir no Netflix. 
Apresente as opções de filmes e peça para escolher uma opção.
Ex: 
Opção 1: SENHOR DOS ANEIS
Opção 2: VIUVA NEGRA
Opção 3: ESQUADRAO SUICIDA
Opção 4: MATRIX 4 

DICA: Utilize Switch/Case.
*/

console.log(
  " Opção 1: SENHOR DOS ANEIS \n Opção 2: VIUVA NEGRA \n Opção 3: ESQUADRAO SUICIDA \n Opção 4: MATRIX 4",
);

function escolherFilme(opcao) {
  switch (opcao) {
    case 1:
      return "Senhor dos aneis";
    case 2:
      return "Viuva negra";
    case 3:
      return "ESQUADRAO SUICIDA";
    case 4:
      return "MATRIX";
    default:
      return "Escolha uma opcao";
  }
}

console.log("\nEscolheru:", escolherFilme(4));

