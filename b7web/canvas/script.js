const canvas = document.querySelector('#tela');
const ctx = canvas.getContext('2d');

let canDraw = false;
let currentColor = 'black';
let mouseX = 0;
let mouseY = 0;

document.querySelectorAll('.color').forEach(color => {
  color.addEventListener('click', chooseColor);
})

document.querySelector('.clear').addEventListener('click', reset);

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', mouseUp);

function chooseColor(e) {
  currentColor = e.target.getAttribute('data-color');

  document.querySelector('.active').classList.remove('active')
  e.target.classList.add('active');
}

function mouseDown(e) {
  canDraw = true;

  mouseX = e.pageX - canvas.offsetLeft;
  mouseY = e.pageY - canvas.offsetTop;
}

function mouseMove(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY)
  }
}

function mouseUp() {
  canDraw = false;
}

function draw(x, y) {
  let pointX = x - canvas.offsetLeft;
  let pointY = y - canvas.offsetTop;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function reset() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
