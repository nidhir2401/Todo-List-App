// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add a delete button to the list item
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});