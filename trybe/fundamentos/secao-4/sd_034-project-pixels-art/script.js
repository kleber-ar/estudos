const colors = document.querySelectorAll('.color');

function randomColors() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

const randomBtn = document.querySelector('#button-random-color');

randomBtn.addEventListener('click', () => {
  colors.forEach((color) => {
    color.style.backgroundColor = randomColors();
  });

  const colorsValue = Array.from(colors).map(
    (color) => color.style.backgroundColor,
  );

  localStorage.setItem('savedPallet', JSON.stringify(colorsValue));
});

let colorSelected = null;

colors.forEach((color) => {
  color.addEventListener('click', () => {
    colors.forEach((c) => c.classList.remove('selected'));
    color.classList.add('selected');

    colorSelected = getComputedStyle(color).backgroundColor;
  });
});

const board = document.querySelector('#pixel-board');

function createBoard(size) {
  board.innerHTML = '';
  board.style.gridTemplate = `repeat(${size},1fr) / repeat(${size},40px)`;

  for (let i = 0; i < size * size; i += 1) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    board.appendChild(pixels);
  }
}

createBoard(5);

const input = document.querySelector('#board-size');
const sizeBtn = document.querySelector('#generate-board');

sizeBtn.addEventListener('click', () => {
  let size = input.valueAsNumber;

  if (!size) return alert('Board inválido!');

  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }

  createBoard(size);

  localStorage.setItem('boardSize', size);
});

board.addEventListener('click', (e) => {
  if (colorSelected) {
    e.target.style.backgroundColor = colorSelected;
  }

  const pixels = Array.from(board.children);

  const boardValues = Array.from(pixels).map(
    (pixel) => pixel.style.backgroundColor,
  );

  localStorage.setItem('pixelBoard', JSON.stringify(boardValues));
});

const clearBtn = document.querySelector('#clear-board');

clearBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
});

function loadStorage() {
  const colorsSaved = JSON.parse(localStorage.getItem('savedPallet'));
  if (colorsSaved) {
    colors.forEach((color, index) => {
      color.style.backgroundColor = colorsSaved[index];
    });
  }

  const boardSaved = JSON.parse(localStorage.getItem('pixelBoard'));
  if (boardSaved) {
    const boards = Array.from(board.children);

    boards.forEach((color, pixel) => {
      color.style.backgroundColor = boardSaved[pixel];
    });
  }

  const sizeSaved = localStorage.getItem('boardSize');
  if (sizeSaved) {
    createBoard(sizeSaved);
  }
}

loadStorage();
