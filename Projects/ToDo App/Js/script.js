const labels = document.querySelectorAll('label');
const checkSvg = document.querySelectorAll('.checkSvg');
const innerCircle = document.querySelectorAll('.inner-circles');
const circle = document.querySelectorAll('.circles');
const taskName = document.querySelectorAll('.task-name');
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
        let tasks = [
            'Complete online javascript coarse', 
            'Jog in the park 3x',
            'Study daily at morning',
        ];

        tasks.forEach( task => {
            UI.addTaskToList(task);
        })
    }

    static addTaskToList(task) {
        const tasksLIst = document.querySelector('.hero__tasks');
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
            <span class="task-name" id="name">
                ${task}
            </span>
        </label>
        <img src="./images/icon-cross.svg" class="delete-btn delete" alt="delete-btn">
        `;

        tasksLIst.appendChild(newTask);


    }

    static clearField(){
        inputField.value = '';
    }
}






// dealing with the keyboard users for navigating the app
inputField.addEventListener('focus', e => {
    document.querySelector('form').style.outline = '2px dashed #ffffff';
})

inputField.addEventListener('blur', e => {
    document.querySelector('form').style.outline = 'none';
})



function getIndex(element) {
    // getting nodeList of all the labels
    let container = element.parentElement.children;

    // looping through and finding the index of target label
    for (let i = 0; i < container.length; i++) {
        if (container[i] == element) {
            return i
        }
    }
    return -1
}


// displaying all the list
document.addEventListener('DOMContentLoaded', UI.displayTasksList())


// Event to add tasks to tasks List
document.querySelector('.hero__form').addEventListener('submit', e => {
    e.preventDefault();
    let userInput = inputField.value;
    if(userInput){
        UI.addTaskToList(userInput);
        UI.clearField();
    }
})

// dealing with completed tasks by crossing and ticking them
// With every label in app
document.querySelector('.hero__tasks').addEventListener('click', e => {
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

    if(e.target.classList.contains('delete')) {
        let tasksList = document.querySelector('.hero__tasks');
        tasksList.removeChild(e.target.parentElement)
    }  
})

let select = null;


// filtering event
document.querySelector('.filter').addEventListener('click', e => {
    if(e.target.classList.contains('filter-btn')) {
        select = e.target.id;
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




// filterButtons.forEach( button => {
//     button.addEventListener('click', e => {
//         select = e.target.id;
//     })

//     if(button.id == select) {
//         button.classList.add('active');
//     }
// })