import { renderTasks } from "./ui";
import { addTask, deleteTask, updateTask } from "./task";
document.addEventListener("DOMContentLoaded", () => {
    renderTasks();
//Agregar el evento para la funcion para agregar una nueva tarea
document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = document.getElementById("task-input");
    if (taskInput.value !== "") {
        //agregar una nueva tarea
        addTask(taskInput.value);
       //Volvemos a cargar la lista de tareas
        renderTasks();
        //Limpiar el input
        document.getElementById("task-input").value = "";
    }

    });

    //Agregar el evento para los botones de las tareas
    document.getElementById("task-list").addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            deleteTask(taskId);
            renderTasks();
        }
        if (e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            updateTask(taskId);
            renderTasks();
        }

    });
    
});