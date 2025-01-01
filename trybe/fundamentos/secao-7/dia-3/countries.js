// Fonte: <https://restcountries.com/v2/all>

const countries = [
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
  {
    name: "Brazil",
    region: "Americas",
    currencies: [{ code: "BRL", name: "Brazilian Real" }],
    capital: "Brasília",
    population: 213993437,
    area: 8515767,
  },
  {
    name: "Canada",
    region: "Americas",
    currencies: [{ code: "CAD", name: "Canadian Dollar" }],
    capital: "Ottawa",
    population: 38008005,
    area: 9976140,
  },
  {
    name: "China",
    region: "Asia",
    currencies: [{ code: "CNY", name: "Chinese Yuan" }],
    capital: "Beijing",
    population: 1439323776,
    area: 9640011,
  },
  {
    name: "France",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Paris",
    population: 67022000,
    area: 551695,
  },
  {
    name: "India",
    region: "Asia",
    currencies: [{ code: "INR", name: "Indian Rupee" }],
    capital: "New Delhi",
    population: 1393409038,
    area: 3287263,
  },
  {
    name: "Mexico",
    region: "Americas",
    currencies: [{ code: "MXN", name: "Mexican Peso" }],
    capital: "Mexico City",
    population: 126190788,
    area: 1964375,
  },
  {
    name: "Russia",
    region: "Europe/Asia",
    currencies: [{ code: "RUB", name: "Russian Ruble" }],
    capital: "Moscow",
    population: 146599183,
    area: 17098242,
  },
  {
    name: "South Africa",
    region: "Africa",
    currencies: [{ code: "ZAR", name: "South African Rand" }],
    capital: "Pretoria",
    population: 59308690,
    area: 1221037,
  },
  {
    name: "United States",
    region: "Americas",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Washington, D.C.",
    population: 331449281,
    area: 9629091,
  },
];

//Exercício 1 Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

function addPlanet(countries) {
  countries.forEach((countrie) => (countrie.planet = "Earth"));
}

addPlanet(countries);

//Exercício 2 Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map. 😜

function countriesInfo(countries) {
  const result = [];

  countries.forEach(({ name, currencies }) => {
    result.push({
      name,
      currencyCode: currencies[0].code,
      currencyName: currencies[0].name,
    });
  });

  return result;
}

countriesInfo(countries);

//Exercício 3 Escreva uma função chamada findCountry que recebe dois parâmetros: o array de países e o nome do país desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. Caso não seja encontrado, a função deve lançar um erro com a mensagem: “País não encontrado!”.

function findCountry(countries, name) {
  const find = countries.find((item) => item.name === name);

  if (!find) return "País não encontrado";

  return find;
}

//Exercício 4 Desenvolva uma função que crie uma cópia do array countries e adicione a Alemanha a esse novo array através do spread operator.

const newCountry = {
  name: "Germany",
  region: "Europe",
  currencies: [{ code: "EUR", name: "Euro" }],
  capital: "Berlin",
  population: 83190556,
  area: 357386,
};

function addCountry(countries, newCountry) {
  return [...countries, newCountry];
}

//Exercício 5 Desenvolva uma solução para percorrer o array countries e construir uma string para cada país com informações e formatação específicas. As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. A string deverá ser construída com as propriedades name, capital, currencies.code e currencies.name separadas por um -.

function formatedContries() {
  return countries.map(
    ({ name, capital, currencies }) =>
      `${name} - ${capital} - ${currencies[0].code} - ${currencies[0].name}`,
  );
}

console.log(formatedContries());
