const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.box');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


boxes.forEach( (box) => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
})

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(e) {
    this.className = 'box';
}

function dragDrop(e) {
    this.append(fill)
    this.className = 'box';
}


function dragStart(e) {
    setTimeout(() => {
        this.className += ' invisible';
    }, 0);
}

function dragEnd(e) {
    this.className = 'fill';
}
