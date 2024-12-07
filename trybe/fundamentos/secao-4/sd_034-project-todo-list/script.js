const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const task = document.createElement('li');
  task.innerText = input.value.trim();

  list.appendChild(task);

  input.value = '';
});

list.addEventListener('click', (e) => {
  Array.from(list.children).forEach((listEl) =>
    listEl.classList.remove('selected'),
  );

  if (e.target.tagName === 'LI') {
    e.target.classList.add('selected');
  }
});

list.addEventListener('dblclick', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  list.innerHTML = '';
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const finalizeds = document.querySelectorAll('.completed');

  finalizeds.forEach((item) => {
    item.remove();
  });
});

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const selected = document.querySelector('.selected');

  selected.remove();
});

document.querySelector('#mover-cima').addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  const previus = selected.previousSibling;

  if (previus) {
    selected.parentNode.insertBefore(selected, previus);
  }
});

document.querySelector('#mover-baixo').addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  const next = selected.nextElementSibling;

  if (next) {
    selected.parentNode.insertBefore(next, selected);
  }
});

document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  const saved = list.innerHTML;

  localStorage.setItem('savedList', saved);
});

const savedList = localStorage.getItem('savedList');

if (savedList) {
  list.innerHTML = savedList;
}
