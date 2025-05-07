let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

// Function to move slides
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    // Update dots
    document.querySelector('.slider .dots li.active').classList.remove('active');
    dots[active].classList.add('active');

    // Reset auto-slide
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => next.click(), 4000);
}

// Event Listeners for Next/Prev
next.onclick = () => {
    active = (active + 1) <= lengthItems ? active + 1 : 0;
    reloadSlider();
};
prev.onclick = () => {
    active = (active - 1) >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};

// Auto-slide every 3 seconds
let refreshInterval = setInterval(() => next.click(), 4000);

// Dot Navigation
dots.forEach((li, index) => {
    li.addEventListener('click', () => {
        active = index;
        reloadSlider();
    });
});

// Ensure resizing keeps proper alignment
window.onresize = reloadSlider;
