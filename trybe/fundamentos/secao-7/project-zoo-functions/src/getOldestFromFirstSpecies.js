const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // Encontrar o funcionário pelo ID
  const employee = data.employees.find((employee) => employee.id === id);

  const fistAnimal = employee.responsibleFor[0];

  const animal = data.species.find((species) => species.id === fistAnimal);

  const oldestAnimal = animal.residents.reduce((oldest, cur) =>
    cur.age > oldest.age ? cur : oldest,
  );

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
