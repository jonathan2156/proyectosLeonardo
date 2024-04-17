document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('new-task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        filterTasks(this.dataset.filter);
    });
});

function addTask() {
    const input = document.getElementById('new-task-input');
    const taskText = input.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const li = createTaskElement(taskText);
        taskList.appendChild(li);
        input.value = '';
        saveTasks();
    }
}

function createTaskElement(text) {
    const li = document.createElement('li');
    li.className = 'task-item'; 
    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'task-text';

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => editTask(span));

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.addEventListener('click', () => {
        completeTask(li);
        saveTasks();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        removeTask(li);
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    return li;
}

function editTask(span) {
    let newText = prompt('Edita tu tarea:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
        span.textContent = newText;
        saveTasks();
    }
}

function completeTask(li) {
    li.classList.toggle('completed');
}

function removeTask(li) {
    li.parentNode.removeChild(li);
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task-item');
    tasks.forEach(task => {
        switch (filter) {
            case 'all':
                task.style.display = '';
                break;
            case 'completed':
                task.style.display = task.classList.contains('completed') ? '' : 'none';
                break;
            case 'active':
                task.style.display = !task.classList.contains('completed') ? '' : 'none';
                break;
        }
    });
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('.task-item').forEach(task => {
        tasks.push({
            text: task.querySelector('.task-text').textContent,
            completed: task.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const taskList = document.getElementById('task-list');
        const li = createTaskElement(task.text);
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    });
}

window.onload = loadTasks;
