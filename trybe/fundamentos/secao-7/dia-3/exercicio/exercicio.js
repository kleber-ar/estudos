// Fonte: <https://restcountries.com/v2/all>
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
    name: "Åland Islands",
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

// 1 - Calcule a quantidade total da população de todos os países.

const sumPopulation = () => {
    return countries.reduce((total, populationData) => total + populationData.population, 0);
}
 console.log('População total:',sumPopulation());

//  2 - Calcule a área total de todos os países.

const sumArea = () => {
    return countries.reduce((total, areaData) => total + areaData.area, 0);
}

console.log('Area total:',sumArea());

// 3 - Encontre o país com o maior nome.

const largeName = () => {
    return countries.reduce((maior, nameData) => maior.name.length > nameData.name.length ? maior : nameData );
}

console.log(largeName());

/* 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes. */

const getCountriesNames = () => {
    return countries.map(country => country.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    
}

const names= getCountriesNames();

const countA = (names) => {
    return names.reduce((acc, names) => acc + names.split('A').length - 1, 0);
}

const counta = (names) => {
    return names.reduce((acc, names) => acc + names.split('a').length - 1, 0);
}

const sumAs = (names) => {
    const A = countA(names);
    const a = counta(names);
    return A + a;
}

const allAs = sumAs(names);

console.log(names);

console.log('Quantidade de letra A:', countA(names),'\nQuantidade de letra a:',counta(names), '\nQuantidade de todos os As:',allAs);
