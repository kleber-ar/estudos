function randomClass() {
  const estilos = ['newspaper', 'magazine1', 'magazine2'];
  const tamanhos = ['medium', 'big', 'reallybig'];
  const rotacoes = ['rotateleft', 'rotateright'];
  const inclinacoes = ['skewleft', 'skewright'];

  const estilo = estilos[Math.floor(Math.random() * estilos.length)];
  const tamanho = tamanhos[Math.floor(Math.random() * tamanhos.length)];
  const rotacao = rotacoes[Math.floor(Math.random() * rotacoes.length)];
  const inclinacao =
    inclinacoes[Math.floor(Math.random() * inclinacoes.length)];

  return [estilo, tamanho, rotacao, inclinacao];
}

const count = document.querySelector('#carta-contador');
const input = document.querySelector('#carta-texto');
const carta = document.querySelector('#carta-gerada');

document.querySelector('#criar-carta').addEventListener('click', () => {
  if (!input.value.trim()) {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';

    return;
  }
  carta.innerHTML = '';
  const text = input.value.split(' ');

  count.textContent = text.length;

  text.forEach((word) => {
    const wordSpan = document.createElement('span');
    wordSpan.innerHTML = word;

    wordSpan.classList.add(...randomClass());

    carta.appendChild(wordSpan);
  });
});

carta.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const palavra = e.target;

    palavra.className = '';

    palavra.classList.add(...randomClass());
  }
});
