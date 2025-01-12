const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  const find = data.employees.find(
    (name) => name.firstName === employeeName || name.lastName === employeeName,
  );

  if (!find) return {};

  return find;
};
module.exports = getEmployeeByName;
