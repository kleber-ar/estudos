document.body.addEventListener('keyup', (event) => {
  playSound(event.code.toLowerCase())
})

function playSound(sound) {
  const audioElement = document.querySelector(`#s_${sound}`);
  const keyElement = document.querySelector(`[data-key = '${sound}']`)

  audioElement.currentTime = 0;
  audioElement.play();

  keyElement.classList.add('active');

  setTimeout(() => {
    keyElement.classList.remove('active')
  }, 100)

}

function playComposition(songArray) {
  let wait = 0;

  for (let songNote of songArray) {
    setTimeout(() => {
      playSound(`key${songNote}`)
    }, wait)

    wait += 250;
  }
}

document.querySelector('button').addEventListener('click', () => {
  const song = document.querySelector('#input').value;
  const songArray = song.split('');

  playComposition(songArray);

})




