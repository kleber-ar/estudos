const VerifyNotas = (n1, n2, n3, n4) => {
    if (typeof n1 !== 'number'|| typeof n2 !== 'number'|| typeof n3 !== 'number'|| typeof n4 !== 'number') {
        throw Error('Digite somente numeros');
    }
}
const notas = (n1, n2, n3, n4) => {
    try {
        VerifyNotas(n1, n2, n3, n4);
        let sum = n1 + n2 + n3 + n4;
        let media = sum / notas.length;
        return `Média: ${media} Soma: ${sum}`;

    } catch (error) {
        return error.message;
    }
}


console.log(notas(1, 1, 5, 1));
