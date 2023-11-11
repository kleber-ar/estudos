/*6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let peça = 'dama';

switch (peça.toLowerCase()){
    case 'torre':
        console.log('Torre -> anda em vertical e horizontal.');
        break;
    
    case 'cavalo':
        console.log('Cavalo -> anda em "L" e pula as peças.');
        break;

    case 'bispo':
        console.log('Bispo -> anda na vertical.');
        break;

    case 'rainha':
        console.log('Rainha -> anda em todas as direçoes.');
        break;

    case 'rei':
        console.log('Rei -> anda somente uma casa em todas as direçoes.');
        break;

    case 'peão':
        console.log('Peão -> anda até duas casas para frente no primeiro movimento, depois somente uma casa, sempre para frente.');
        break;

    default:
        console.log('Peça inválida');
}