const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100px

function shadow(e) {
    /*
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    */

    // ES6 style
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // When hovering the h1 the e.target will be the h1 element
    // resulting in coordinates close to 0 (when in the upper
    // right corner of the h1). We don't want that. We want the
    // coordinates from the left and the top of the screen.
    // So that's why we need to add the offsetLeft and -Top to it.
    if(this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // Calculating the max 'walk' (distance) the shadow can grow
    // F.e. if the walk is 100px, the shadow has a 
    // reach of 50 and -50.
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px rgba(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px rgba(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px rgba(0, 0, 255, 0.7)
    `;
};

hero.addEventListener('mousemove', shadow);