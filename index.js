const navBtn = document.querySelector('#nav-btn');
const mainNav = document.querySelector('#main-nav');

navBtn.addEventListener('click', (e) => {
    mainNav.classList.toggle('active');
    navBtn.classList.toggle('active');
})

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const carouselInner = document.querySelector('.carousel-inner');

function showItem(index) {
  const translateValue = -index * 100 + '%';
  carouselInner.style.transform = 'translateX(' + translateValue + ')';
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  } else if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}

function openContactModal() {
    document.getElementById('contact-modal').style.display = 'flex';
}

// Function to close the contact modal
function closeContactModal() {
    document.getElementById('contact-modal').style.display = 'none';
};

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
