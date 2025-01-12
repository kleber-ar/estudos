const data = require('../data/zoo_data');

const { employees, species } = data;

const formatedEmployee = (employee) => {
  const speciesNames = employee.responsibleFor.map(
    (id) => species.find((animal) => animal.id === id).name,
  );

  const locations = employee.responsibleFor.map(
    (id) => species.find((animal) => animal.id === id).location,
  );

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesNames,
    locations,
  };
};

const getEmployeesCoverage = (param) => {
  // seu código aqui
  if (!param) {
    return employees.map(formatedEmployee);
  }

  const employee = employees.find(
    (value) =>
      value.id === param.id ||
      value.firstName === param.name ||
      value.lastName === param.name,
  );

  if (!employee) {
    throw new Error('Informações inválidas');
  }

  return formatedEmployee(employee);
};

module.exports = getEmployeesCoverage;
