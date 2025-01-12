const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  // seu código aqui
  data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
module.exports = getAnimalsOlderThan;
