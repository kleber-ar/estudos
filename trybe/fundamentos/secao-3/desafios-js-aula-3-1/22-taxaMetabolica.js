/* Renata é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site.
Crie um algoritmo que receba os dados a seguir e, a partir disso, calcula a BMR da pessoa:

Idade: número maior que 0
Sexo: M ou F
Peso (kg): número maior que 0
Altura (cm): numero maior que 0

* Fórmula para homens: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5.
* Fórmula para mulheres: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161.

O retorno deve ser no seguinte formato:
"A taxa metabólica basal é: 1860 Kcal." */

let person = {
  idade: 28,
  sexo: "M",
  peso: 90,
  altura: 172,
};

function calcBMR(person) {
  let bmr;

  if (person.sexo === "M") {
    bmr = person.altura * 6.25 + person.peso * 9.99 - person.idade * 4.92 + 5;
  }
  if (person.sexo === "F") {
    bmr = person.altura * 6.25 + person.peso * 9.99 - person.idade * 4.92 - 161;
  }

  return `A taxa é de ${bmr.toFixed(0)}`;
}

console.log(calcBMR(person));
