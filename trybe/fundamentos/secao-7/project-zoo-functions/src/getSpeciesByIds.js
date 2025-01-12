const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  // seu código aqui
  data.species.filter((species) => ids.includes(species.id));

module.exports = getSpeciesByIds;
