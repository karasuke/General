import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';
export const addTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]')
    const list = document.querySelector('[data-list]');
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');

    if (value == '' || date == '') {
        
        return; 
    }
    
    //se limpia el input para que quede vacio
    input.value = '';
    calendar.value ='';

    const complete = false;

    const taskObj = {
  
        value,  
        dateFormat,
        complete,
        id:uuid.v4()
      };

    list.innerHTML = '';

    //obtiene los elementos del local storage y recibe como parametro la llave tasks
    //en caso de que sea null se formatea y le damos un arreglo vacio
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(taskObj)

    //sessionStorage.setItem("tasks",JSON.stringify(taskObj));
    localStorage.setItem("tasks",JSON.stringify(taskList));

    displayTasks();
    
  };


  
  export const createTask = ({value, dateFormat, complete, id}) => {
  
    
    const task = document.createElement('li');
          task.classList.add('card');
    
    //backticks
    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const titleTask = document.createElement('span');
          titleTask.classList.add('task');
          titleTask.innerText = value;
          taskContent.appendChild(check);
          taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement("span")
          dateElement.innerHTML = dateFormat;
          task.appendChild(taskContent);
          task.appendChild(dateElement);
          task.appendChild(deleteIcon(id));
    return task;
    
  };