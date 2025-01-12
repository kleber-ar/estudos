const data = require('../data/zoo_data');

const { species } = data;

const getAnimalNames = (residents, sex, sorted) => {
  const names = residents
    .filter(({ sex: residentSex }) => !sex || residentSex === sex)
    .map(({ name }) => name);

  return sorted ? names.sort() : names;
};

const getAnimalMap = (options = {}) =>
  // seu código aqui
  species.reduce((locations, { location, name, residents }) => {
    const animalInfo = options.includeNames
      ? { [name]: getAnimalNames(residents, options.sex, options.sorted) }
      : name;

    return {
      ...locations,
      [location]: [...(locations[location] || []), animalInfo],
    };
  }, {});
module.exports = getAnimalMap;
