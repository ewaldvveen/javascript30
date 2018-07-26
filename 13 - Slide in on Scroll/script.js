// This function will makes sure that another passed in function
// will only run every x ms, to prevent that the passed in
// function will give performance issues if it runs too often.
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // Looping over every single image and checking where it needs
    // to be shown on the page.
    sliderImages.forEach(sliderImage => {
        // Checking where we are on the page based on the bottom.
        // Then we subtract half the image height to get the
        // position on the page where the image is half way.
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
        // Gives us the bottom of the image.
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

// Wrapping the checkSlide function in the debounce function as
// explained above.
window.addEventListener('scroll', debounce(checkSlide));