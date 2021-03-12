const labels = document.querySelectorAll('label');
const checkSvg = document.querySelectorAll('.checkSvg');
const innerCircle = document.querySelectorAll('.inner-circles');
const circle = document.querySelectorAll('.circles');
// const taskName = document.querySelectorAll('.task-name');
const inputField = document.querySelector('.hero__form__field');
const filterButtons = document.querySelectorAll('.filter-btn');

// class : representing a todo Task
class Task {
    constructor(name) {
        this.name = name;
    }
}


// class UI to haddle Ui things
class UI {
    static displayTasksList() {
        let tasks = Store.getTasks();

        tasks.forEach( task => {
            UI.addTaskToList(task);
        })
    }

    static addTaskToList(task) {
        const tasksList = document.querySelector('.hero__tasks');
        const newTask  = document.createElement('div');
        newTask.className = 'hero__tasks__task flex common-bg common-h8';
        newTask.id = 'task';
        newTask.innerHTML = `
        <input id="check" class="hidden-el" type="checkbox">
        <label for="check">
            <span class="circles circle pseudo-opacity">
                <span id="inner-circle" class="inner-circles inner-circle flex">                 
                    <img id="checksvg" class="checkSvg" src="./images/icon-check.svg" alt="checksvg">
                </span>
            </span>
            <span class="task-name todo-name" id="name">
                ${task}
            </span>
        </label>
        <img src="./images/icon-cross.svg" class="delete-btn delete" alt="delete-btn">
        `;

        tasksList.appendChild(newTask);


    }

    static clearField(){
        inputField.value = '';
    }
}


//  class store to handle Store things
class Store {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('task.list') == null) {
            tasks = [];
        }
        else{
            tasks = JSON.parse(localStorage.getItem('task.list'));
        }

        return tasks
    }

    static addTasks(task) {
        let tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('task.list', JSON.stringify(tasks));
    }

    static removeTask(index) {
        let tasks = Store.getTasks();
        tasks.splice(index, 1);
        localStorage.setItem('task.list', JSON.stringify(tasks));
    }
}





// dealing with the keyboard users for navigating the app
inputField.addEventListener('focus', e => {
    document.querySelector('form').style.outline = '2px dashed #ffffff';
})

inputField.addEventListener('blur', e => {
    document.querySelector('form').style.outline = 'none';
})


function getIndex(element, container) {
    // getting nodeList of all the labels
    // let container = element.parentElement.parentNode;

    // looping through and finding the index of target label
    for (let i = 0; i < container.length; i++) {
        if (container[i] == element.parentElement) {
            return i
        }
    }
}



// displaying all the list
document.addEventListener('DOMContentLoaded', UI.displayTasksList())


// Event to add tasks to tasks List
document.querySelector('.hero__form').addEventListener('submit', e => {
    e.preventDefault();
    let userInput = inputField.value;
    if(userInput){
        // adding task to UI
        UI.addTaskToList(userInput);
        // adding task to Store
        Store.addTasks(userInput)
        UI.clearField();
    }
})


document.querySelector('.hero__tasks').addEventListener('click', e => {
    // dealing with completed tasks by crossing and ticking them
    // With every label in app
    if(e.target.classList.contains('hidden-el')) {
        let label = e.target.nextElementSibling;
        let circle = label.firstElementChild;
        let innerCircle = circle.firstElementChild;
        let checkSvg = innerCircle.firstElementChild;
        let taskName = circle.nextElementSibling;
        if (checkSvg.style.opacity == 1) {
            checkSvg.style.opacity = 0;
            innerCircle.style.backgroundColor = '#25273c';
            circle.classList.add('pseudo-opacity');
            taskName.classList.remove('task-completed');
            taskName.classList.add('task-name');
        }
        else {
            checkSvg.style.opacity = 1;
            innerCircle.style.backgroundColor = 'transparent';
            circle.classList.remove('pseudo-opacity');
            taskName.classList.remove('task-name');
            taskName.classList.add('task-completed');
        }
    }

    // removing a task
    if(e.target.classList.contains('delete')) {
        let tasksList = document.querySelector('.hero__tasks');
        // removing from Store
        Store.removeTask(getIndex(e.target, e.currentTarget.children))
        // removing from UI
        tasksList.removeChild(e.target.parentElement)
    }  
})




// filtering event
let select = localStorage.getItem('task.id') || 'showAll';
document.querySelector('.filter').addEventListener('click', e => {
    if(e.target.classList.contains('filter-btn')) {
        select = e.target.id;
        localStorage.setItem('task.id', select)
    }
    
    filterButtons.forEach(button => {
        if (button.id == select) {
            button.classList.add('active')
        }
        else {
            button.classList.remove('active')
        }
    })

}) 

// to make sure it  also happens withour an event
filterButtons.forEach(button => {
    if (button.id == select) {
        button.classList.add('active')
    }
    else {
        button.classList.remove('active')
    }
})



document.getElementById('showAll').addEventListener('click', e => {
    let taskNames = document.querySelectorAll('.todo-name');
    taskNames.forEach( taskName => {
        taskName.parentElement.parentElement.style.display = 'flex';
    })
})

document.getElementById('showCompleted').addEventListener('click', e => {
    let taskNames = document.querySelectorAll('.todo-name');
    taskNames.forEach(taskName => {
        if(taskName.classList.contains('task-completed')) {
            taskName.parentElement.parentElement.style.display = 'flex';
        }
        else{
            taskName.parentElement.parentElement.style.display = 'none';
        }
    })
})

document.getElementById('showActive').addEventListener('click', e => {
    let taskNames = document.querySelectorAll('.todo-name');
    taskNames.forEach(taskName => {
        if (taskName.classList.contains('task-completed')) {
            taskName.parentElement.parentElement.style.display = 'none';
        }
        else {
            taskName.parentElement.parentElement.style.display = 'flex';
        }
    })
})

document.getElementById('clearCompleted').addEventListener('click', e => {
    let taskNames = document.querySelectorAll('.todo-name');
    taskNames.forEach(taskName => {
        if (taskName.classList.contains('task-completed')) {
            let tasksList = document.querySelector('.hero__tasks');
            let deleteBtn = taskName.parentElement.nextElementSibling;
            // removing from Store
            Store.removeTask(getIndex(deleteBtn, tasksList.children));
            // removing form UI
            tasksList.removeChild(taskName.parentElement.parentElement);
        }
    })
})



// showing items remaining 
document.addEventListener('DOMContentLoaded', e => {
    let taskNames = document.querySelectorAll('.todo-name');
    let itemRemaining = 0;
    taskNames.forEach( taskName => {
        if(taskName.classList.contains('task-name')) {
            itemRemaining += 1;
        }
    })
    
    document.querySelector('.info').innerText = `${itemRemaining} item(s) left`;
})
