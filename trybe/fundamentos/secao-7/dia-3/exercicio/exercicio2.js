/* 5 - Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes */

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = () => {
  // retorne seu código aqui
  return (nameAndAverage = students.map((student, index) => ({
    name: student,
    average:
      grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  })));
};

console.log(studentAverage());
