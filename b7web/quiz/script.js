let currentQuestion = 0;
let correctAnswer = 0;

document.querySelector('.questionArea').style.display = 'block';

showQuestion()

function showQuestion() {

  if (!questions[currentQuestion]) {

    document.querySelector('.progress--bar').style.width = '100%';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';

    document.querySelector('.scoreText2').innerText = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`

    let msg = document.querySelector('.scoreText1');
    let msgPct = document.querySelector('.scorePct');
    let pct = Math.floor((correctAnswer / questions.length) * 100);

    if (pct <= 30) {
      msg.innerText = 'Vish!';
      msgPct.innerText = `Acertou ${pct}%`;
      msgPct.style.color = '#ff0000';
    } else if (pct > 30 && pct <= 70) {
      msg.innerText = 'Raspando!';
      msgPct.innerText = `Acertou ${pct}%`;
      msgPct.style.color = '#ffff00';

    } else {
      msg.innerText = 'Mandou bem!';
      msgPct.innerText = `Acertou ${pct}%`;
      msgPct.style.color = '#00ff00';
    }

    document.querySelector('button').addEventListener('click', reset);

    return;
  }

  let pct = Math.floor((currentQuestion / questions.length) * 100)

  document.querySelector('.progress--bar').style.width = `${pct}%`;

  const q = questions[currentQuestion];

  document.querySelector('.question').innerText = q.question;

  let options = '';

  q.options.forEach((option, index) => {
    options += `<div data-op = "${index}" class="option"><span>${parseInt(index) + 1}</span>${option}</div>`
  });

  document.querySelector('.options').innerHTML = options;

  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', chooseOption)
  })

}

function chooseOption(e) {
  const clickedOption = parseInt(e.target.getAttribute('data-op'));

  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswer++;
  }

  currentQuestion++;

  showQuestion();
}

function reset() {
  currentQuestion = 0;
  correctAnswer = 0;

  document.querySelector('.questionArea').style.display = 'block';
  document.querySelector('.scoreArea').style.display = 'none';

  showQuestion()
}
