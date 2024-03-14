function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    var taskText = document.createTextNode(taskInput.value);

    li.appendChild(checkbox);
    li.appendChild(taskText);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field after adding task
}
// Load tasks from local storage when the page loads
window.onload = function() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(function(task) {
            addTaskToList(task);
        });
    }
};

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(taskText);
    saveTasksToLocalStorage(taskText);

    taskInput.value = ""; // Clear input field after adding task
}

function addTaskToList(taskText) {
    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    var taskTextNode = document.createTextNode(taskText);

    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    taskList.appendChild(li);
}

function saveTasksToLocalStorage(taskText) {
    var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}
// Load tasks from local storage when the page loads
window.onload = function() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(function(task) {
            addTaskToList(task);
        });
    }
};

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(taskText);
    saveTasksToLocalStorage(taskText);

    taskInput.value = ""; // Clear input field after adding task
}

function addTaskToList(taskText) {
    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    var taskTextNode = document.createTextNode(taskText);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        deleteTaskFromList(li, taskText);
    };

    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

// Load tasks from local storage when the page loads
window.onload = function() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(function(task) {
            addTaskToList(task);
        });
    }
};

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(taskText);
    saveTasksToLocalStorage(taskText);

    taskInput.value = ""; // Clear input field after adding task
}

function addTaskToList(taskText) {
    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    var taskTextNode = document.createTextNode(taskText);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        deleteTaskFromList(li, taskText);
    };

    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

// Load tasks from local storage when the page loads
window.onload = function() {
    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(function(task) {
            addTaskToList(task);
        });
    }
};

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    addTaskToList(taskText);
    saveTasksToLocalStorage(taskText);

    taskInput.value = ""; // Clear input field after adding task
}

function addTaskToList(taskText) {
    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    var taskTextNode = document.createTextNode(taskText);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        deleteTaskFromList(li, taskText);
    };

    li.appendChild(checkbox);
    li.appendChild(taskTextNode);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}

function saveTasksToLocalStorage(taskText) {
    var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function deleteTaskFromList(taskItem, taskText) {
    taskItem.remove();

    var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var index = savedTasks.indexOf(taskText);
    if (index !== -1) {
        savedTasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }
}
