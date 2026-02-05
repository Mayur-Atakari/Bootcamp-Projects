let draggedTask = null;

const tasks = document.querySelectorAll(".task");

const columns = document.querySelectorAll(".task-list");

tasks.forEach((task) => {
  task.addEventListener("dragstart", function (e) {
    draggedTask = task;
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", function (e) {
    task.classList.remove("dragging");
  });
});

columns.forEach((column) => {
  column.addEventListener("dragover", function (e) {
    e.preventDefault();
    column.classList.add("drag-over");
  });

  column.addEventListener("dragleave", function (e) {
    e.preventDefault();
    column.classList.remove("drag-over");
  });

  column.addEventListener("drop", function (e) {
    e.preventDefault();
    column.classList.remove("drag-over");
    column.appendChild(draggedTask);
  });
});
