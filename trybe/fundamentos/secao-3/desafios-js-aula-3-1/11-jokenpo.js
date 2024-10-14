/* Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando. Exiba o resultado no formato:
"Player 1 won" ou "A Ties" ou "Player 2 won". */

function escolherJogada() {
  let opcoes = ["Pedra", "Papel", "Tesoura"];

  return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function battle() {
  let player1 = escolherJogada();
  let player2 = escolherJogada();

  if (player1 === player2) {
    return "Tie";
  }
  if (player1 === "Pedra" && player2 === "Tesoura") {
    return "Player1 win";
  }
  if (player1 === "Tesoura" && player2 === "Papel") {
    return "Player 1 win";
  }
  if (player1 === "Papel" && player2 === "Pedra") {
    return "Player 1 win";
  } else {
    return "Player 2 win";
  }
}

console.log(battle());
