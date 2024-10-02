/* Crie um algoritmo que recebe a idade de Marina, Silvia e Iza e imprime quem é a mais nova. Exiba no seguinte formato:
"Pessoa" é a mais nova. */

let person1 = {
  name: "Marina",
  idade: 20,
};

let person2 = {
  name: "Silvia",
  idade: 28,
};

let person3 = {
  name: "Iza",
  idade: 18,
};

let maisNova = person1;

if (person2.idade < maisNova.idade) {
  maisNova = person2;
}

if (person3.idade < maisNova.idade) {
  maisNova = person3;
}

console.log(maisNova);

