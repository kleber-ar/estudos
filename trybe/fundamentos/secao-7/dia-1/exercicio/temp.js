//Dado um array de temperaturas em graus Celsius,
//crie uma função que retorne um novo array com as temperaturas convertidas para Fahrenheit.
//A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

// Temperaturas em graus Celsius

const temperaturesCelsius = [23, 10, 32, 21, 47];

function covertToFahrenheit(temps) {
  return temps.map((temp) => (temp * 9) / 5 + 32);
}

console.log(covertToFahrenheit(temperaturesCelsius));
