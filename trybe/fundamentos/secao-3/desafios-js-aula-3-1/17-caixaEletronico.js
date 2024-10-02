/* Um grande banco lhe contratou para fazer um programa para gerenciar um caixa eletrônico. As máquinas deste banco só possuem notas de R$10, R$50 e R$100.
Para fazer este programa funcionar você deve coletar o saldo da pessoa e qual o valor do saque que ela quer fazer.
Se o valor passado no saque for zero exiba a mensagem: "Valor de saque inválido".
Se o saque for maior que o saldo, exiba a mensagem: "Saldo insuficiente".
É preciso levar em consideração o valor do saque com as possibilidades de notas do caixa eletrônico. Caso o valor não se encaixe nas possibilidades, exiba a mensagem: "Valor inválido para as notas disponíveis: R$10, R$50, R$100".
Se estiver tudo certo com o valor do saque, subtraia o valor do saldo e exiba a mensagem: "Saque efetuado! Novo saldo: R$30". */

let saldo = 1000;

function caixa(saldo, saque) {
  if (saque === 0) {
    return "Valor inválido";
  }

  if (saque > saldo) {
    return "Saldo insuficiente";
  }

  if (saque % 10 !== 0) {
    return "Saque indisponivel para as notas: R$10, R$50, R$100";
  }

  saldo -= saque;

  return `Saque efetuado! Valor do saldo: ${saldo}`;
}

console.log(caixa(saldo, 300));

