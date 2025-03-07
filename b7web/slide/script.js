let totalSlides = document.querySelectorAll('.item').length;
let currentSlide = 0;

document.querySelector('.slide').style.width = `calc(100vw * ${totalSlides})`;

function goPrev() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  update();
}

function goNext() {
  currentSlide++;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  update();
}

function createRadios() {
  const radioControls = document.querySelector('.radio-controls');
  radioControls.innerHTML = "";

  let radiosHtml = "";

  for (let i = 0; i < totalSlides; i++) {
    radiosHtml += `
      <input type="radio" name="slide" id="slide-${i}" data-index="${i}">
      <label for="slide-${i}"></label>
    `;
  }

  radioControls.insertAdjacentHTML("beforeend", radiosHtml);

  document.querySelectorAll('.radio-controls input').forEach(radio => {
    radio.addEventListener("click", (event) => {
      currentSlide = parseInt(event.target.dataset.index);
      update();
    });
  });

}

createRadios();

function update() {
  let newMargin = currentSlide * window.innerWidth;
  document.querySelector('.slide').style.marginLeft = `-${newMargin}px`;

  document.querySelectorAll('input[type="radio"]').forEach((radio, index) => {
    radio.checked = index === currentSlide;
  })
}

setInterval(goNext, 3000)
