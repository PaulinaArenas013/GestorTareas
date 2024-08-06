import { renderTasks } from "./ui";
import { addTask } from "./task";
document.addEventListener('DOMContentLoaded', () => {renderTasks()});
//Agregar el evento para la funcion para agregar una nueva tarea
document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    if (taskInput !== '') {
        //agregar una nueva tarea
        addTask(taskInput.value);
       //Volvemos a cargar la lista de tareas
        renderTasks();
        //Limpiar el input
        tdocument.getElementById('task-input').value = '';
    }
    
}
})