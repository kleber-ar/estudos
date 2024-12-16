const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const searchEmployee = (id, employeeInfo) => {
  // Implemente seu código aqui
  let employee = '';
  for (let index = 0; index < professionalBoard.length; index += 1) {
    if (professionalBoard[index].id === id) {
      employee = professionalBoard[index];
    }
  }
  if (!employee) {
    throw new Error('ID não identificada');
  }
  if (!employee[employeeInfo]) {
    throw new Error('Informação indisponível');
  }
  return employee[employeeInfo];
};

console.log(searchEmployee('1256-4', 'fistName'));

module.exports = searchEmployee;
