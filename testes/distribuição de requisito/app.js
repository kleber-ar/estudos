function distribuirRequisitos(integrantes, numRequisitos, minRequisitos, maxRequisitos) {
  numRequisitos = getRandomInt(minRequisitos, maxRequisitos);
  const requisitos = [];

  for (let i = 1; i <= numRequisitos; i++) {
    requisitos.push(`Requisito ${i}`);
  }

  const requisitosEmbaralhados = shuffle(requisitos);

  for (let i = 0; i < requisitosEmbaralhados.length; i++) {
    const integrante = integrantes[i % integrantes.length];
    integrante.requisitos.push(requisitosEmbaralhados[i]);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const integrantes = [
  { nome: 'Integrante 1', requisitos: [] },
  { nome: 'Integrante 2', requisitos: [] },
  { nome: 'Integrante 3', requisitos: [] },
];

const numRequisitos = 60; // Número total de requisitos desejado
const minRequisitos = 7; // Valor mínimo do intervalo
const maxRequisitos = 12; // Valor máximo do intervalo

distribuirRequisitos(integrantes, numRequisitos, minRequisitos, maxRequisitos);

integrantes.forEach((integrante) => {
  console.log(`Integrante: ${integrante.nome}`);
  console.log(`Requisitos: ${integrante.requisitos.join(', ')}`);
  console.log('---');
});

