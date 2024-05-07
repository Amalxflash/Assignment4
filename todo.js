
document
  .getElementById("todoButton")
  .addEventListener("click", function () {
    const todoContainer = document.getElementById("todo-container");
    if (todoContainer.style.display === "none") {
      todoContainer.style.display = "block";
      fetchAndProcessTodos();
    } else {
      todoContainer.style.display = "none";
    }
  });

function fetchAndProcessTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => processTodos(data))
    .catch((error) => console.error("Error fetching todos:", error));
}

function processTodos(todos) {
  let completedCount = 0;
  const todoListDiv = document.getElementById("todo-list");
  todoListDiv.innerHTML = ""; // Clear previous todo list

  todos.forEach((todo, index) => {
    const taskNumber = index + 1;

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-item");
    taskContainer.classList.add(
      todo.completed ? "completed" : "incomplete"
    );
    // Add todo-item class to the container
    taskContainer.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `todo-${todo.id}`;
    checkbox.disabled = todo.completed; // Disable checkbox for completed tasks
    checkbox.checked = todo.completed; // Mark checkbox checked if task is completed
    checkbox.onclick = () => {
      if (!todo.completed && checkbox.checked) {
        completedCount++;
        if (completedCount === 5) {
          // Show popup modal instead of alert
          const popup = document.getElementById("popup");
          popup.style.display = "block";
          setTimeout(function () {
            popup.style.display = "none";
          }, 2000);
        }
      } else if (!checkbox.checked) {
        completedCount--;
      }
    };

    const label = document.createElement("label");
    label.htmlFor = `todo-${todo.id}`;
    label.textContent = todo.title;

    taskContainer.appendChild(
      document.createTextNode(`Task${taskNumber}: `)
    );
    taskContainer.appendChild(label);
    taskContainer.appendChild(checkbox);
    todoListDiv.appendChild(taskContainer);
  });
}
