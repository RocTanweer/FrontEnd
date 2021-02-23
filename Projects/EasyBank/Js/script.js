const hamBtn = document.getElementById('hamBtn');
const header = document.querySelector('.header');
const overLay = document.getElementById('header__overlay');
const mobMenu = document.querySelector('.mob-menu');


hamBtn.addEventListener('click', hamAnimation);

function hamAnimation() {
    if(header.classList.contains('mobile-toggle')){
        document.body.style.overflow = 'auto';
        header.classList.remove('mobile-toggle');
        overLay.classList.remove('fade-in');
        mobMenu.classList.remove('fade-in')
        overLay.classList.add('fade-out');
        mobMenu.classList.add('fade-out');
    }
    else{
        document.body.style.overflow = 'hidden';
        header.classList.add('mobile-toggle');
        overLay.classList.remove('fade-out');
        mobMenu.classList.remove('fade-out');
        overLay.classList.add('fade-in');
        mobMenu.classList.add('fade-in');
    }
}