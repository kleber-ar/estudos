/*Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];

for (let index = 0; index < numbers.length; index++) {

     if (index < (numbers.length - 1)) {

     mult.push(numbers[index] * numbers[index + 1])

     }else {
        mult.push(numbers[index] * 2)
     }
}

console.log(mult);

console.log('---------------');

/*Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:*/

let n = 5;
let simb = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let indexLine = 0; indexLine < n; indexLine++) {
    for (let indexColumn = 0; indexColumn < n; indexColumn++) {
        if (indexColumn < inputPosition) {
            inputLine = inputLine + ' ';
        }else {
            inputLine = inputLine + simb;
        }
                
    }

    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;

}

console.log('----------');


for (let index = 0; index < n; index++) {
    inputLine += simb;
    console.log(inputLine);

}

console.log('-----------');

for (let index = 0; index < n; index++) {
    console.log(inputLine);

}



