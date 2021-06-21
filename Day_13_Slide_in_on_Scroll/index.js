
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImgs = document.querySelectorAll('.slide-in');

function updateSlide() {
    sliderImgs.forEach((sliderImg => {
        const slideInAt = window.scrollY + window.innerHeight - sliderImg.height / 2;
        const imgBottom = sliderImg.offsetTop + sliderImg.height;
        const isHalfShown = slideInAt > sliderImg.offsetTop;
        const isNotScrollPast = window.scrollY < imgBottom;

        if (isHalfShown && isNotScrollPast) {
            sliderImg.classList.add('active');
        } else {
            sliderImg.classList.remove('active');
        }
    }));
}

window.addEventListener("scroll", debounce(updateSlide))
