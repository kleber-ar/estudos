/* Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread. */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'pera', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'leite em pó', 'paçoca'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const fruitSaladWithAdditional = [...fruit, ...additional];
  return fruitSaladWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));