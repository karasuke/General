import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector('[data-form-btn]');




//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

displayTasks();

//pasos para crear una tarea de fecha
/*
const calendar = document.querySelector('[data-form-date]')
const date = calendar.value;
const dateFormat = moment(date).format('DD/MM/YYYY');
const dateElement = document.createElement("span")
dateElement.innerHTML = dateFormat;
task.appendChild(dateElement);*/


