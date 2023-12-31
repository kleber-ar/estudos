const readline = require('readline-sync');

function handleIMC(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const imc = weight / heightSquared;

  return imc;
}

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 300, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function handleBMIResult(imc) {
  const statuses = Object.keys(BMI_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return imc >= minBMI && imc <= maxBMI;
  });

  return resultFind;
}

function main() {
  const weight = readline.questionFloat('Qual é seu peso?(KG)');
  const height = readline.questionInt('Qual é sua altura?(CM)');
  
  const imc = handleIMC(weight, height);

  const bmiResult = handleBMIResult(imc);

  console.log(`IMC: ${imc.toFixed(2)}`);

  console.log(bmiResult);
}

main();