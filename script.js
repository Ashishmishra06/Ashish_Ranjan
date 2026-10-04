const todoInput = document.getElementById("todo-input");
const addTaskbtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => renderTask(task));
addTaskbtn.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;

  const newtask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newtask);
  todoInput.value = "";
  console.log(tasks);
});
function renderTask(task) {
  const li = document.createElement("li");
  li.setAttribute("date-id", task.id);
  if (task.completed) li.classList.add("completed");
  li.innerHTML = `
  <span>${task.text} </span>
  <button> delete</button> 
  `;
  li.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;
    task.completed != task.completed;
    li.classList.toggle("completed");
    saveTasks();
  });
  todoList.appendChild(li);
}
function saveTasks() {
  localStorage.setItem("task", JSON.stringify("tasks"));
}
