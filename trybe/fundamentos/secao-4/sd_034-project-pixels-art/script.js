const board = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
let selectedColor = null;
let gridSize = 5;

// Função para salvar o estado da paleta de cores
function savePalett() {
  const palletState = Array.from(colors).map(
    (color) => color.style.backgroundColor,
  );
  localStorage.setItem('paletteState', JSON.stringify(palletState));
}

// Função para carregar o estado da paleta de cores
function loadPallet() {
  const savedPalett = JSON.parse(localStorage.getItem('paletteState'));
  if (savedPalett) {
    savedPalett.forEach((color, index) => {
      colors[index].style.backgroundColor = color;
    });
  }
}

// Função para salvar o estado do quadro de pixels e o tamanho do board
function saveBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const boardState = Array.from(pixels).map(
    (pixel) => pixel.style.backgroundColor,
  );
  // Salva o estado das cores dos pixels
  localStorage.setItem('pixelBoard', JSON.stringify(boardState));
  // Salva o tamanho do board
  localStorage.setItem('boardSize', gridSize);
}

// Função para carregar o estado do quadro de pixels
function loadBoard() {
  const pixels = document.querySelectorAll('.pixel');
  const savedBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  if (savedBoard) {
    savedBoard.forEach((color, index) => {
      pixels[index].style.backgroundColor = color;
    });
  }
}

// Função para carregar o tamanho do board
function loadBoardSize() {
  const savedBoardSize = localStorage.getItem('boardSize');
  if (savedBoardSize) {
    gridSize = parseInt(savedBoardSize, 10);
    input.value = gridSize;
  } else {
    gridSize = 5; // Definir um valor padrão
  }
}

const input = document.querySelector('#board-size');
const boardBtn = document.querySelector('#generate-board');

// Ao carregar a página, tenta restaurar o tamanho do quadro e o estado dos pixels
window.addEventListener('load', () => {
  loadBoardSize(); // Carrega o tamanho do board
  board.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 40px)`;
  for (let i = 0; i < gridSize * gridSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    board.appendChild(pixel);
  }
  loadBoard(); // Carrega o estado do board (cores dos pixels)
  loadPallet(); // Carrega o estado da paleta de cores
});

// Função para selecionar a cor da paleta
colors.forEach((color) => {
  color.addEventListener('click', (e) => {
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
      selectedColor = null;
    } else {
      colors.forEach((c) => {
        c.classList.remove('selected');
      });
      e.target.classList.add('selected');
      selectedColor = getComputedStyle(e.target).backgroundColor;
    }
  });
});

// Função para pintar o pixel
board.addEventListener('click', (e) => {
  if (e.target.classList.contains('pixel') && selectedColor) {
    e.target.style.backgroundColor = selectedColor;
    saveBoard(); // Salva o estado após pintar
  }
});

// Função para limpar o quadro
const resetBtn = document.querySelector('#clear-board');
resetBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
  saveBoard(); // Salva o estado após limpar
});

// Função para gerar uma cor aleatória
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Função para randomizar as cores da paleta
const randomBtn = document.querySelector('#button-random-color');
randomBtn.addEventListener('click', () => {
  colors.forEach((color) => {
    color.style.backgroundColor = getRandomColor();
  });
  savePalett(); // Salva o estado da paleta após randomizar
});

boardBtn.addEventListener('click', () => {
  gridSize = input.valueAsNumber;
  if (!input.value || input.value <= 0) return alert('Board inválido!');

  board.innerHTML = '';

  if (gridSize < 5) {
    gridSize = 5;
  } else if (gridSize > 50) {
    gridSize = 50;
  }

  board.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 40px)`;

  for (let i = 0; i < gridSize * gridSize; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    board.appendChild(pixel);
  }

  saveBoard(); // Salva o estado do quadro e o tamanho
});
