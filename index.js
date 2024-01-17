const navBtn = document.querySelector('#nav-btn');
const mainNav = document.querySelector('#main-nav');

navBtn.addEventListener('click', (e) => {
    mainNav.classList.toggle('active');
    navBtn.classList.toggle('active');
})