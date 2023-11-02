const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");
const clearTasksButton = document.getElementById("clear-tasks");

// Event listener to add a new task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${taskText}`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

// Event listener to clear completed tasks
clearTasksButton.addEventListener("click", () => {
    const completedTasks = document.querySelectorAll("li input:checked");
    completedTasks.forEach(task => {
        task.parentElement.remove();
    });
});
