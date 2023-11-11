/*5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.*/

let anguloA = 100;
let anguloB = 15;
let anguloC = 65;

let somaAngulos = anguloA + anguloB + anguloC;
let angulosPositivo = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivo){
    if (somaAngulos === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('erro: angulo invalido');
}