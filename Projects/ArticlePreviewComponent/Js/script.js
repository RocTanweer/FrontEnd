const shareIcon = document.getElementById('share');
const iconContainer = document.getElementById('icons-container');
const body = document.body;

shareIcon.addEventListener('mousedown', showIcons);
shareIcon.addEventListener('dblclick', hideIcons);
body.addEventListener('click', hideUniversally);

function showIcons(e) {
    if(!iconContainer.classList.contains('icons')) {
        iconContainer.classList.add('icons');
        iconContainer.style.visibility = 'visible';
    }

    else{
        iconContainer.classList.remove('icons');
        iconContainer.style.visibility = 'hidden';
    }
}

function hideIcons(e) {
    if (iconContainer.classList.contains('icons')) {
        iconContainer.classList.remove('icons');
        iconContainer.style.visibility = 'hidden';
    }

    else {
        iconContainer.classList.add('icons');
        iconContainer.style.visibility = 'visible';
}
}

