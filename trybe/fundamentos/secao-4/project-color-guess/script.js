const colorRgb = document.querySelector('#rgb-color');
const colors = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');

function randomColors() {
  colors.forEach((color) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    color.style.backgroundColor = `rgb(${r},${g},${b})`;
  });

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorRgb.textContent = randomColor.style.backgroundColor;

  answer.textContent = 'Escolha uma cor';
}

randomColors();

let score = 0;

document.querySelector('#balls').addEventListener('click', (e) => {
  const scoreEl = document.querySelector('#score');

  if (e.target.style.backgroundColor === colorRgb.textContent) {
    score += 3;
    scoreEl.textContent = score;

    answer.textContent = 'Acertou!';
  } else {
    answer.textContent = 'Errou! Tente novamente!';
  }
});

document.querySelector('#reset-game').addEventListener('click', randomColors);
