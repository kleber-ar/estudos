const data = require('../data/zoo_data');

const isManager = (id) =>
  // seu código aqui
  data.employees.some((employee) => employee.managers.includes(id));
const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees
    .filter((employee) => employee.managers.includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
