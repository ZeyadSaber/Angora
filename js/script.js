const _nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > _nav.scrollHeight){
        _nav.classList.add('nav-scroll');
    }else if(window.scrollY <= _nav.scrollHeight){
        _nav.classList.remove('nav-scroll');
    }
});
