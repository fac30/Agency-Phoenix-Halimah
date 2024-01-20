const navBtn = document.querySelector('#nav-btn');
const mainNav = document.querySelector('#main-nav');

navBtn.addEventListener('click', (e) => {
    mainNav.classList.toggle('active');
    navBtn.classList.toggle('active');
});

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'manual' // Set trigger to manual to control it with events
    });

    // Show popover on hover
    $('[data-toggle="popover"]').on('mouseenter', function () {
        $(this).popover('show');
    });

    // Hide popover on mouse leave
    $('[data-toggle="popover"]').on('mouseleave', function () {
        $(this).popover('hide');
    });
});