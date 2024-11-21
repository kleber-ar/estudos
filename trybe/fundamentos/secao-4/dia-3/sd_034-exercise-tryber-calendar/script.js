const createDaysOfTheWeek = () => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const createDays = () => {
  const decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const days = document.querySelector("#days");

  // Itera pela lista de dias
  decemberDaysList.forEach((day) => {
    const dayElement = document.createElement("li");
    dayElement.classList.add("day");
    dayElement.innerText = day;

    if ([24, 25, 31].includes(day)) {
      dayElement.classList.add("holiday");
    }

    if ([4, 11, 18, 25].includes(day)) {
      dayElement.classList.add("friday");
    }

    // Adiciona o dia ao elemento #days
    days.appendChild(dayElement);
  });
};

createDays();

const holydays = document.querySelectorAll(".holiday");
const holidayBtn = document.querySelector("#btn-holiday");

holidayBtn.addEventListener("click", () => {
  holydays.forEach((day) => {
    if (day.style.backgroundColor === "red") {
      day.style.backgroundColor = "rgb(238, 238, 238)"; // Remove o estilo inline, voltando à cor original
    } else {
      day.style.backgroundColor = "red"; // Define a cor para vermelho
    }
  });
});

const fridayBtn = document.querySelector("#btn-friday");

fridayBtn.addEventListener("click", () => {
  const fridays = document.querySelectorAll(".friday");

  fridays.forEach((day) => {
    if (day.innerText === "SEX") {
      day.innerText = day.dataset.originalText;
    } else {
      day.dataset.originalText = day.innerText;
      day.innerText = "SEX";
    }
  });
});

const daysElements = document.querySelectorAll(".day");

daysElements.forEach((day) => {
  day.style.cursor = "pointer";
  day.addEventListener("mouseover", (e) => {
    e.target.style.fontSize = "30px";
  });

  day.addEventListener("mouseleave", (e) => {
    e.target.style.fontSize = "20px";
  });
});

const tasks = document.querySelectorAll(".task");
let selectedColor = null;

tasks.forEach((task) => {
  task.addEventListener("click", (e) => {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      e.target.style.border = "";

      selectedColor = null;
    } else {
      // Remove a seleção de todas as tarefas antes de adicionar a nova
      tasks.forEach((t) => {
        t.classList.remove("selected");
        t.style.border = ""; // Remove bordas anteriores
      });

      // Seleciona a tarefa clicada
      e.target.classList.add("selected");
      e.target.style.border = "5px solid black"; // Estilo de borda

      selectedColor = e.target.style.backgroundColor;
    }
  });
});

daysElements.forEach((day) => {
  day.addEventListener("click", (e) => {
    e.target.style.color =
      e.target.style.color === selectedColor
        ? "rgb(119,119,119)"
        : selectedColor;
  });
});

const addTaskBtn = document.querySelector("#btn-add");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

const addTask = () => {
  const text = taskInput.value.trim();

  if (!text) return alert("vai adc nada?!");

  const newTask = document.createElement("li");
  newTask.textContent = text;
  taskList.appendChild(newTask);

  taskInput.value = "";
};

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Evitar comportamento padrão
    addTask();
  }
});
