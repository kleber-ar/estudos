const countries = [
  {
    name: "Afghanistan",
    region: "Asia",
    currencies: [{ code: "AFN", name: "Afghan afghani" }],
    capital: "Kabul",
    population: 40218234,
    area: 652230,
  },
  {
    name: "Aland Islands",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Mariehamn",
    population: 28875,
    area: 1580,
  },
  {
    name: "Albania",
    region: "Europe",
    currencies: [{ code: "ALL", name: "Albanian lek" }],
    capital: "Tirana",
    population: 2837743,
    area: 28748,
  },
  {
    name: "Algeria",
    region: "Africa",
    currencies: [{ code: "DZD", name: "Algerian dinar" }],
    capital: "Algiers",
    population: 44700000,
    area: 2381741,
  },
  {
    name: "American Samoa",
    region: "Oceania",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Pago Pago",
    population: 55197,
    area: 199,
  },
  {
    name: "Andorra",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Andorra la Vella",
    population: 77265,
    area: 468,
  },
  {
    name: "Angola",
    region: "Africa",
    currencies: [{ code: "AOA", name: "Angolan kwanza" }],
    capital: "Luanda",
    population: 32866268,
    area: 1246700,
  },
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
];

//Exercício 1 Crie a função getPopulation que retorne a quantidade total da população de todos os países.
//De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

function getPopulation() {
  return countries
    .map((countrie) => ({
      name: countrie.name,
      population: countrie.population,
    }))
    .sort(
      (a, b) => a.population - b.population || a.name.localeCompare(b.name),
    );
}

const totalPopulation = countries.reduce((acc, cur) => acc + cur.population, 0);

//Exercício 2 🚀 Crie a função longestName que deve retornar o país com o maior nome. De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.

function longestName() {
  return countries.reduce((acc, cur) =>
    acc.name.length > cur.name.length ? acc : cur,
  );
}

//Exercício 3 🚀 Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. Essa função calcula e retorna a área total de todos os países de uma determinada região.

function totalAreaByRegion(region = "Europe") {
  const filteredCountries = countries.filter(
    (value) => value.region === region,
  );

  if (filteredCountries.length === 0) {
    return `Região "${region}" não encontrada.`;
  }

  const totalArea = filteredCountries.reduce((acc, cur) => acc + cur.area, 0);

  return {
    region,
    TotalArea: totalArea,
  };
}

//🚀 Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura

const getLargestCountriesByRegion = () => {
  return countries.reduce((acc, cur) => {
    if (!acc[cur.region] || acc[cur.region].area < cur.area) {
      acc[cur.region] = { name: cur.name, area: cur.area };
    }
    return acc;
  }, {});
};

console.log(getLargestCountriesByRegion());
