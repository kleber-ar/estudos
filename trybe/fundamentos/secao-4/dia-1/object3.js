// 1 - Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

// 2 - Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

// 3 - Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

// 4 - Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(school.lessons, 0));

const getNumberOfStudents = (obj) =>
  obj.lessons.reduce((acc, cur) => acc + cur.students, 0);

console.log(getNumberOfStudents(school));

const verifyProp = (obj, key) => obj.lessons.every((lesson) => lesson[key]);

console.log(verifyProp(school, "professor"));

const changeKey = (obj, course, valor) => {
  const findCourse = obj.lessons.find((lesson) => lesson.course === course);

  if (findCourse) {
    findCourse.shift = valor;

    return findCourse;
  } else {
    return "Tem não";
  }
};

console.log(changeKey(school, "Python", "Noite"));
