//Exercício 1 Faça uma função que some todos os números pares do array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

function sumPares(numbers) {
  return numbers.reduce(
    (acc, number) => (number % 2 === 0 ? acc + number : acc),
    0,
  );
}

console.log(sumPares(numbers));

//segunda forma

const sum = (acc, number) => (number % 2 === 0 ? acc + number : acc);

function sumPares2(numbers) {
  return numbers.reduce(sum, 0);
}

console.log(sumPares2(numbers));

//Exercício 2 Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele.

const students = [
  {
    name: "Jorge",

    lastName: "Silva",

    age: 14,

    turn: "Manhã",

    courses: [
      { name: "Matemática", grade: 67 },

      { name: "Português", grade: 79 },

      { name: "Química", grade: 70 },

      { name: "Biologia", grade: 65 },
    ],
  },

  {
    name: "Mario",

    lastName: "Ferreira",

    age: 15,

    turn: "Tarde",

    courses: [
      { name: "Matemática", grade: 59 },

      { name: "Português", grade: 80 },

      { name: "Química", grade: 78 },

      { name: "Biologia", grade: 92 },
    ],
  },

  {
    name: "Jorge",

    lastName: "Santos",

    age: 15,

    turn: "Manhã",

    courses: [
      { name: "Matemática", grade: 76 },

      { name: "Português", grade: 90 },

      { name: "Química", grade: 70 },

      { name: "Biologia", grade: 80 },
    ],
  },

  {
    name: "Maria",

    lastName: "Silveira",

    age: 14,

    turn: "Manhã",

    courses: [
      { name: "Matemática", grade: 91 },

      { name: "Português", grade: 85 },

      { name: "Química", grade: 92 },

      { name: "Biologia", grade: 90 },
    ],
  },

  {
    name: "Natalia",

    lastName: "Castro",

    age: 14,

    turn: "Manhã",

    courses: [
      { name: "Matemática", grade: 70 },

      { name: "Português", grade: 70 },

      { name: "Química", grade: 60 },

      { name: "Biologia", grade: 50 },
    ],
  },

  {
    name: "Wilson",

    lastName: "Martins",

    age: 14,

    turn: "Manhã",

    courses: [
      { name: "Matemática", grade: 80 },

      { name: "Português", grade: 82 },

      { name: "Química", grade: 79 },

      { name: "Biologia", grade: 75 },
    ],
  },
];

function bestMateria() {
  return students.map(({ name, courses }) => {
    return {
      name: name,
      course: courses.reduce((acc, cur) => (acc.grade > cur.grade ? acc : cur))
        .name,
    };
  });
}

console.log(bestMateria());
