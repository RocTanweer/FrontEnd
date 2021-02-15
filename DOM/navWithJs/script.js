const hambtn = document.getElementById('ham');

const hamToggler = (e) => {
    let navItems = document.getElementById('list');
    
    if(navItems.classList.contains('unorderedList')) {
        navItems.classList.remove('unorderedList')
    }

    else{
        navItems.classList.add('unorderedList')
    }

}

hambtn.addEventListener('click', hamToggler);



