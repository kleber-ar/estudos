//Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime as idades em ordem crescente.

let Marina = {
  nome: "Marina",
  idade: 20,
};

let Silvia = {
  nome: "Silvia",
  idade: 30,
};

let Iza = {
  nome: "Iza",
  idade: 18,
};

let pessoas = [Marina, Silvia, Iza];

pessoas.sort((a, b) => {
  return a.idade - b.idade;
});

pessoas.forEach((pessoa) => {
  console.log(pessoa.nome, pessoa.idade);
});
