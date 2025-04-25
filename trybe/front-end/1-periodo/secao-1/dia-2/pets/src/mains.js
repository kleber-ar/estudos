import Swal from "sweetalert2";
import './style.css';

const img = document.querySelector('img');
const getDogBtn = document.querySelector('#random-dog');
const getCatBtn = document.querySelector('#random-cat');
const surpriseBtn = document.querySelector('#surprise-me');

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';

getDogBtn.addEventListener('click', () => {
  fetch(DOG_API)
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message;
    })
})

getCatBtn.addEventListener('click', () => {
  fetch(CAT_API)
    .then((res) => res.json())
    .then(([data]) => {
      img.src = data.url;
    })
})

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch(DOG_API),
    fetch(CAT_API),
  ])
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message || data[0].url;
    })
})
