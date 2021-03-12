const listItem = document.querySelectorAll('.list-item');
const container = document.querySelector('.container');


listItem.forEach( (item) => {
    item.addEventListener('dragstart', (e) => {
        item.classList.add('opacity');
    })


    item.addEventListener('dragend', (e) => {
        item.classList.remove('opacity');
    })
})


container.addEventListener('dragover', e => {
    const dragging = document.querySelector('.opacity');
    container.firstElementChild.appendChild(dragging);
})

