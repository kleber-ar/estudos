import Swal from 'sweetalert2';
import './style.css';
import coinIcon from './assets/coin.svg';

const input = document.querySelector('#moeda');
const quantidadeInput = document.querySelector('#quantidade');
const botao = document.querySelector('#botao');
const titulo = document.querySelector('.moedas-titulo');
const lista = document.querySelector('.moedas-lista');

init('USD');

async function init(moeda) {
  try {
    const res = await fetch(`https://api.frankfurter.app/latest?from=${moeda}`);
    const data = await res.json();

    if (!data || !data.rates) {
      throw new Error('Moeda inválida ou dados não encontrados.');
    }

    titulo.textContent = `Valores para: ${moeda}`;
    lista.innerHTML = '';

    Object.entries(data.rates).forEach(([sigla, valor]) => {
      const li = document.createElement('li');
      li.className = 'moeda-div';
      li.style.cursor = 'pointer';

      li.innerHTML = `
        <img src="${coinIcon}" alt="ícone moeda" class="moeda-svg">
        <div><strong>${sigla}:</strong></div>
        <span class="moeda-valor">${valor.toFixed(2)}</span>
      `;

      li.addEventListener('click', async () => {
        const amount = Number(quantidadeInput.value) || 1;

        try {
          const res = await fetch(`https://api.frankfurter.app/latest?from=${moeda}&to=${sigla}`);
          const data = await res.json();

          const convertedAmount = (amount * data.rates[sigla]).toFixed(2);

          Swal.fire({
            icon: 'info',
            title: 'Conversão',
            html: `<strong>${amount} ${moeda}</strong> = <strong>${convertedAmount} ${sigla}</strong>`,
          });

        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Erro na conversão',
            text: error.message,
          });
        }
      });

      lista.appendChild(li);
    });

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
    });
  }
}

botao.addEventListener('click', () => {
  const moeda = input.value.trim().toUpperCase();

  if (!moeda) {
    Swal.fire('Erro', 'Digite uma moeda válida (ex: USD)', 'warning');
    return;
  }

  init(moeda);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') botao.click();
});

