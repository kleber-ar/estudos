/* Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Exiba o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". */

function escolherJogada() {
  let opcoes = ["Pedra", "Papel", "Tesoura"];

  return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function battle() {
  let player1 = escolherJogada();
  let player2 = escolherJogada();

  console.log(`Player 1 escolheu: ${player1}`);
  console.log(`Player 2 escolheu: ${player2}`);

  if (player1 === player2) {
    return "A Ties";
  } else if (
    (player1 === "Pedra" && player2 === "Tesoura") ||
    (player1 === "Tesoura" && player2 === "Papel") ||
    (player1 === "Papel" && player2 === "Pedra")
  ) {
    return "Player 1 won";
  } else {
    return "Player 2 won";
  }
}

console.log(battle());

