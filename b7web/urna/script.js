let currentEtapa = 0;
let etapa = etapas[currentEtapa];
let voto = '';
let votos = [];

let title = document.querySelector('.etapa strong');
let inputDiv = document.querySelector('.input-div');
let info = document.querySelector('.info-voto');
let infoLeft = document.querySelector('.info-left');
let infoRight = document.querySelector('.info-right');
let infoBotton = document.querySelector('.info-botton');
let inputs = [];

function init() {
  etapa = etapas[currentEtapa];

  title.innerText = etapa.titulo;

  info.style.display = 'none';
  info.innerHTML = '';
  infoRight.innerHTML = '';

  inputDiv.innerHTML = '';

  for (let i = 0; i < etapa.numeros; i++) {
    let input = document.createElement('div');
    input.classList.add('input');

    if (i === 0) {
      input.classList.add('select');
    }

    inputDiv.appendChild(input);
  }

  inputs = document.querySelectorAll('.input');

  voto = '';
}

init();

document.querySelectorAll('.tecla').forEach(tecla => {
  tecla.addEventListener('click', (e) => {
    if (e.target.innerText.length === 1) {
      let inputValue = e.target.innerText;

      for (let input of inputs) {
        if (input.innerText === '') {
          input.innerText = inputValue;

          voto = Array.from(inputs).map(inp => inp.innerText).join('');

          inputs.forEach(inp => inp.classList.remove('select'));

          let nextInput = Array.from(inputs).find(inp => inp.innerText === '');
          if (nextInput) {
            nextInput.classList.add('select');
          }

          infoVoto();
          break;
        }
      }
    }
  });
});

function infoVoto() {
  let inputsFull = Array.from(inputs).every(input => input.innerText !== '');

  if (!inputsFull) return;

  let candidato = etapa.candidatos.find(value => value.numero === voto);

  info.innerHTML = '';
  infoRight.innerHTML = '';

  if (candidato) {
    let nameEl = document.createElement('div');
    nameEl.classList.add('name');
    nameEl.innerHTML = `Nome: <strong>${candidato.nome}</strong>`;

    let partidoEl = document.createElement('div');
    partidoEl.classList.add('partido');
    partidoEl.innerHTML = `Partido: <strong>${candidato.partido}</strong>`;

    candidato.fotos.forEach(foto => {
      let imageDiv = document.createElement('div');
      imageDiv.classList.add('image');

      let img = document.createElement('img');
      img.src = `images/${foto.url}`;
      img.alt = foto.legenda;

      let desc = document.createElement('div');
      desc.classList.add('desc');
      desc.innerHTML = `<strong>${foto.legenda}</strong>`;

      imageDiv.appendChild(img);
      imageDiv.appendChild(desc);
      infoRight.appendChild(imageDiv);
    });

    info.appendChild(nameEl);
    info.appendChild(partidoEl);

  } else {
    let warning = document.createElement('div');
    warning.classList.add('warning', 'select');
    warning.innerText = 'Nulo';
    info.appendChild(warning);
  }

  info.style.display = 'block';
}

function clear() {
  inputs.forEach(input => {
    input.innerText = '';
  });

  inputs[0].classList.add('select');
  info.style.display = 'none';
  infoRight.innerHTML = '';
}

document.querySelector('.corrigir').addEventListener('click', clear);

document.querySelector('.branco').addEventListener('click', () => {
  info.innerHTML = '';

  let warning = document.createElement('div');
  warning.classList.add('warning', 'select');
  warning.innerText = 'Branco';

  info.appendChild(warning);
  info.style.display = 'block';
});


document.querySelector('.confirmar').addEventListener('click', () => {
  let inputValues = Array.from(inputs).map(input => input.innerText).join('');
  let name = document.querySelector('.name strong');
  let partido = document.querySelector('.partido strong');
  let warning = document.querySelector('.warning');

  if (name || warning) {
    currentEtapa++;

    if (currentEtapa < etapas.length) {
      init();
    } else {
      end()
    }

    if (name) {
      votos.push({
        numero: inputValues,
        nome: name.innerText,
        partido: partido.innerText,
      });
    } else if (warning) {
      votos.push(`Voto: ${warning.innerText}`);
    }
  }
});

function end() {
  info.style.display = 'none';
  infoRight.style.display = 'none';
  infoLeft.style.display = 'none';
  infoBotton.style.display = 'none';

  let fim = document.createElement('div');
  fim.classList.add('fim', 'select');
  fim.innerHTML = 'FIM';
  document.querySelector('.tela').appendChild(fim);

  setTimeout(() => {
    location.reload();
  }, 3000);

}

