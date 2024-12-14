function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;

  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
  }

  // Converte os valores para números
  const num1 = Number(value1);
  const num2 = Number(value2);

  // Verifica se a conversão falhou (se for NaN)
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error('Informe dois números para realizar a soma');
  }

  const result = num1 + num2;

  return result;
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  try {
    const result = calculateSum();
    displayResult(result);
  } catch (error) {
    displayResult(error.message);
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
