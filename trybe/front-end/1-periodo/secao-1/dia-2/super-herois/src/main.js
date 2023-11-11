import Swal from 'sweetalert2';
import './style.css';

const elements = {
  img: document.querySelector('#image'),
  name: document.querySelector('#name'),
  h2: document.querySelector('h2'),
  gender: document.querySelector('#gender'),
  race: document.querySelector('#race'),
  height: document.querySelector('#height'),
  weight: document.querySelector('#weight'),
  fullName: document.querySelector('#full-name'),
  alterEgos: document.querySelector('#alter-egos'),
  button: document.querySelector('#button'),
};

const fetchRandomHero = async () => {
  try {
    const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const hero = data[randomIndex];

    elements.img.src = hero.images.md;
    elements.name.textContent = hero.name;
    elements.h2.textContent = 'Informações';
    elements.gender.textContent = `Gender: ${hero.appearance.gender}`;
    elements.race.textContent = `Race: ${hero.appearance.race}`;
    elements.height.textContent = `Height: ${hero.appearance.height[1]}`;
    elements.weight.textContent = `Weight: ${hero.appearance.weight[1]}`;
    elements.fullName.textContent = `Full Name: ${hero.biography.fullName}`;
    elements.alterEgos.textContent = `Alter Egos: ${hero.biography.alterEgos}`;
  } catch (error) {
    Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  }
};

elements.button.addEventListener('click', (event) => {
  event.preventDefault();
  fetchRandomHero();
});

// o de cima é refatorado

/* import Swal from 'sweetalert2';
import './style.css';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const h2 = document.querySelector('h2');
const gender = document.querySelector('#gender');
const race = document.querySelector('#race');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const fullName = document.querySelector('#full-name');
const alterEgos = document.querySelector('#alter-egos');
const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then((result) => result.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const hero = data[randomIndex];

      img.src = hero.images.md;
      name.innerHTML = hero.name;
      h2.innerHTML = `Informaçoes`;
      gender.innerHTML = `Gender: ${hero.appearance.gender}`;
      race.innerHTML = `Race: ${hero.appearance.race}`;
      height.innerHTML = `Height: ${hero.appearance.height[1]}`;
      weight.innerHTML = `Weight: ${hero.appearance.weight[1]}`;
      fullName.innerHTML = `Full Name: ${hero.biography.fullName}`;
      alterEgos.innerHTML = `Alter Egos: ${hero.biography.alterEgos}`;
    })
    
});
 */