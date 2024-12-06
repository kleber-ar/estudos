const addBtn = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function add() {
  const input = document.querySelector('#texto-tarefa');
  const newTask = document.createElement('li');

  newTask.innerText = input.value.trim();
  list.appendChild(newTask);
  input.value = '';
}

addBtn.addEventListener('click', add);

list.addEventListener('click', (e) => {
  const tasks = document.querySelectorAll('li');

  tasks.forEach((task) => {
    task.classList.remove('selected');
  });

  if (e.target.tagName === 'LI') {
    e.target.classList.add('selected');
  }
});

list.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  list.innerHTML = '';
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const tasks = document.querySelectorAll('li.completed');

  tasks.forEach((task) => {
    task.remove();
  });
});

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const task = document.querySelector('li.selected');

  task.remove();
});

document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  const tasks = Array.from(list.children).map((task) => task.outerHTML);

  localStorage.setItem('savedList', JSON.stringify(tasks));
});

if (localStorage.getItem('savedList')) {
  const savedList = JSON.parse(localStorage.getItem('savedList'));

  savedList.forEach((listHTML) => {
    list.insertAdjacentHTML('beforeend', listHTML);
  });
}

document.querySelector('#mover-cima').addEventListener('click', () => {
  const selected = document.querySelector('li.selected');

  if (selected) {
    const previous = selected.previousElementSibling;

    if (previous) {
      selected.parentNode.insertBefore(selected, previous);
    }
  }
});

document.querySelector('#mover-baixo').addEventListener('click', () => {
  const selected = document.querySelector('li.selected');

  if (selected) {
    const next = selected.nextElementSibling;

    if (next) {
      selected.parentNode.insertBefore(next, selected);
    }
  }
});
