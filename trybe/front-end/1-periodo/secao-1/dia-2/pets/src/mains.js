import './style.css';

const catButton = document.querySelector('#random-cat')
const dogButton = document.querySelector('#random-dog');
const surpriseMeButton = document.querySelector('#surprise-me');
const petImg = document.querySelector('#random-pet-image');



dogButton.addEventListener("click", () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
        const petURL = data.message;

        petImg.src = petURL;
    });
});

catButton.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((res) => res.json())
    .then((data) => {
        const petURL = data[0].url;

        petImg.src = petURL
    });
})

surpriseMeButton.addEventListener('click', () => {
    Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
    ])
    .then((res) => res.json())
    .then((data) => {
        const petURL = data.message || data[0].url;

        petImg.src = petURL;
    });
});

