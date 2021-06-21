
function debounce (func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this; const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImgs = document.querySelectorAll('.slide-in');

function updateSlide () {
  sliderImgs.forEach(sliderImg => {
    const slideInAt = window.scrollY + window.innerHeight - sliderImg.height / 4;
    const imgBottom = sliderImg.offsetTop + sliderImg.height;
    const isAQuaterShown = slideInAt > sliderImg.offsetTop;
    const isNotScrollPast = window.scrollY < imgBottom;

    if (isAQuaterShown && isNotScrollPast) {
      sliderImg.classList.add('active');
    } else {
      sliderImg.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(updateSlide));
