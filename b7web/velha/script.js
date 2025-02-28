const square = {
  a1: '', a2: '', a3: '',
  b1: '', b2: '', b3: '',
  c1: '', c2: '', c3: ''
};

const squareInitial = { ...square };

let player = '';
let warning = '';
let playing = false;

reset();

function reset() {

  Object.assign(square, squareInitial);

  document.querySelectorAll('.item').forEach(item => {
    item.innerText = '';
  });

  const random = Math.floor(Math.random() * 2);
  player = (random === 0) ? 'X' : 'O';

  warning = '';
  playing = true;

  renderInfo()
}

function renderInfo() {
  document.querySelector('.vez').innerHTML = player;
  document.querySelector('.resultado').innerHTML = warning;
}

function itemClick(event) {
  let item = event.target.getAttribute('data-item');

  if (playing && !square[item]) {
    square[item] = player;
    event.target.innerText = player;

    if (checkWinner(player)) {
      warning = `${player} venceu! 🎉`;
      playing = false;
    } else if (Object.values(square).every(cell => cell !== '')) {
      warning = `Deu velha! 🤝`;
      playing = false;
    } else {
      togglePlayer();
    }
  }

  renderInfo();
}

function togglePlayer() {
  player = (player === 'X') ? 'O' : 'X';
}

function checkWinner(player) {
  const possibilities = [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'b2', 'c3'],
    ['a3', 'b2', 'c1']
  ];

  return possibilities.some(array => array.every(item => square[item] === player));
}

document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', itemClick);
})
