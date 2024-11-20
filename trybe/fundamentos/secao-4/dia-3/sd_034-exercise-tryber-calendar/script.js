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
  holydays.forEach((holyday) => {
    holyday.style.backgroundColor =
      holyday.style.backgroundColor === "rgb(255, 113, 113)"
        ? "rgb(238, 238, 238)"
        : "rgb(255, 113, 113)";
  });
});

const fridays = document.querySelectorAll(".friday");
const fridayBtn = document.querySelector("#btn-friday");

fridayBtn.addEventListener("click", () => {
  fridays.forEach((friday) => {
    if (!friday.dataset.originalText) {
      friday.dataset.originalText = friday.textContent;
    }

    friday.textContent =
      friday.textContent === "SEX" ? friday.dataset.originalText : "SEX";
  });
});

const daysElements = document.querySelectorAll(".day");

daysElements.forEach((day) => {
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
  task.addEventListener("click", (event) => {
    if (event.target.classList.contains("selected")) {
      event.target.classList.remove("selected");
      selectedColor = null;
    } else {
      tasks.forEach((t) => t.classList.remove("selected"));
      event.target.classList.add("selected");
      selectedColor = event.target.style.backgroundColor;
    }
  });
});

const days = document.querySelectorAll(".day");

days.forEach((day) => {
  day.addEventListener("click", (event) => {
    if (selectedColor) {
      const currentColor = event.target.style.color;
      event.target.style.color =
        currentColor === selectedColor ? "rgb(119, 119, 119)" : selectedColor;
    }
  });
});

const addButton = document.querySelector("#btn-add");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

function addTask() {
  const taskText = taskInput.value.trim(); // Remove espaços extras
  if (taskText === "") {
    alert("Por favor, insira um compromisso antes de adicionar.");
    return;
  }

  const newTaskItem = document.createElement("li");
  newTaskItem.textContent = taskText;
  taskList.appendChild(newTaskItem);

  taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
