const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

inputText.addEventListener('input', (e) => {
  memeText.textContent = e.target.value;
});

const inputImg = document.querySelector('#meme-insert');
const memeImg = document.querySelector('#meme-image');

inputImg.addEventListener('change', (e) => {
  const file = e.target.files[0];

  //memeImg.src = URL.createObjectURL(file); ou apaga tudo de baixo e deixa esse

  const reader = new FileReader();

  reader.onload = (i) => {
    memeImg.src = i.target.result;
  };

  reader.readAsDataURL(file);
});

const memeContainer = document.querySelector('#meme-image-container');

document.querySelector('#fire').addEventListener('click', () => {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
});
document.querySelector('#water').addEventListener('click', () => {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
});
document.querySelector('#earth').addEventListener('click', () => {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
});

document.querySelector('#images').addEventListener('click', (e) => {
  const image = e.target.src;

  memeImg.src = image;
});
