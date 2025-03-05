let areas = {
  a: null,
  b: null,
  c: null
};

document.querySelectorAll('.item').forEach(item => {

  item.addEventListener('dragstart', (e) => {
    e.currentTarget.classList.add('dragging');
  });

  item.addEventListener('dragend', (e) => {
    e.currentTarget.classList.remove('dragging');
  });

});

document.querySelectorAll('.area').forEach(area => {

  area.addEventListener('dragover', (e) => {
    e.preventDefault();

    if (!e.currentTarget.querySelector('.item')) {
      e.currentTarget.classList.add('hover')
    }
  })

  area.addEventListener('dragleave', (e) => {
    e.currentTarget.classList.remove('hover');
  })

  area.addEventListener('drop', (e) => {
    e.currentTarget.classList.remove('hover');

    if (!e.currentTarget.querySelector('.item')) {
      let dragItem = document.querySelector('.dragging');
      e.currentTarget.appendChild(dragItem);
      updateAreas();
    }
  })
})

document.querySelector('.neutralArea').addEventListener('dragover', (e) => {
  e.preventDefault();
  e.currentTarget.classList.add('hover');
})

document.querySelector('.neutralArea').addEventListener('dragleave', (e) => {
  e.currentTarget.classList.remove('hover');
})

document.querySelector('.neutralArea').addEventListener('drop', (e) => {
  e.currentTarget.classList.remove('hover')
  let dragItem = document.querySelector('.dragging');
  e.currentTarget.appendChild(dragItem);
  updateAreas();
});

function updateAreas() {
  document.querySelectorAll('.area').forEach(area => {
    let name = area.getAttribute('data-name');

    if (area.querySelector('.item')) {
      areas[name] = area.querySelector('.item').innerHTML;
    } else {
      areas[name] = null;
    }
  })

  if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
    document.querySelector('.areas').classList.add('correct');
  } else {
    document.querySelector('.areas').classList.remove('correct');
  }

}
