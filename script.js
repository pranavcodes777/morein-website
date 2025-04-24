const slider = document.querySelector('.reviews-slider');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

if (prevButton && nextButton && slider) {
    prevButton.addEventListener('click', () => {
        slider.scrollLeft -= slider.offsetWidth;
    });

    nextButton.addEventListener('click', () => {
        slider.scrollLeft += slider.offsetWidth;
    });
}