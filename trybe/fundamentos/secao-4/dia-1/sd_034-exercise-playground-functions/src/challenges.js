// const menu = require('./mcDonalds');
// const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase

const splitSentence = (string) => string.split(' ');

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

const footballPoints = (wins, ties) => {
  const win = 3;
  const tie = 1;

  return wins * win + ties * tie;
};

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist

const playlist = [];

const addMusics = (artistName, musicName, musicTime) => {
  playlist.push({
    artist: artistName,
    music: musicName,
    musicTime,
  });
};

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

const moreExpensive = (data, category) => {
  const lunch = data[category].reduce(
    (acc, cur) => (acc.price > cur.price ? acc : cur),
    { price: 0 },
  );

  return `O produto mais caro é: ${lunch.name}, que custa: R$${lunch.price.toFixed(2)}.`;
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe

const checkItem = (data, category, item) =>
  data[category].some((valor) => valor.name === item);

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

const addNewItem = (data, category, item) => {
  if (checkItem(data, category, item)) {
    return `O produto: "${item}" já existe!`;
  }

  const newItem = {
    name: item.name,
    price: item.price,
    ingredients: item.ingredients,
    calories: item.calories,
  };

  data[category].push(newItem);

  return newItem;
};

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero

const counterGender = (data) => {
  let maleCount = 0;
  let femaleCount = 0;

  for (const guest of data.guests) {
    if (guest.gender === 'male') {
      maleCount += 1;
    } else if (guest.gender === 'female') {
      femaleCount += 1;
    }
  }

  return {
    male: maleCount,
    female: femaleCount,
  };
};

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

const filterState = (data, state) =>
  data.guests.filter((guest) => guest.address.state === state);

// Requisito 9 - Crie uma função que altera a propriedade `picture`

const changePicture = (data, link) => {
  for (const guest of data.guests) {
    guest.picture = link;
  }

  return data.guests;
};

// Requisito 10 - Crie um função que gera um relatório

const generateReport = (data) => {
  const guests = data.guests.length;
  const allGender = counterGender(data);
  const sumAges = data.guests.reduce((acc, cur) => acc + cur.age, 0);
  const avgAge = parseFloat((sumAges / guests).toFixed(2));

  const countries = [...new Set(data.guests.map((guest) => guest.country))];
  countries.sort();

  return {
    totalGuests: guests,
    totalGender: allGender,
    avgAge,
    countries,
  };
};

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  addMusics: typeof addMusics === 'function' ? addMusics : () => {},
  playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : () => {},
  checkItem: typeof checkItem === 'function' ? checkItem : () => {},
  addNewItem: typeof addNewItem === 'function' ? addNewItem : () => {},
  counterGender: typeof counterGender === 'function' ? counterGender : () => {},
  filterState: typeof filterState === 'function' ? filterState : () => {},
  changePicture: typeof changePicture === 'function' ? changePicture : () => {},
  generateReport:
    typeof generateReport === 'function' ? generateReport : () => {},
};
