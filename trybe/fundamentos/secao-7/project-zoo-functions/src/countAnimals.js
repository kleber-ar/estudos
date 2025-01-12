const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  if (!animal) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }

  const { species, sex } = animal;
  const specie = data.species.find(({ name }) => name === species);

  if (sex) {
    return specie.residents.filter(
      ({ sex: residentSex }) => residentSex === sex,
    ).length;
  }

  return specie.residents.length;
};

module.exports = countAnimals;
