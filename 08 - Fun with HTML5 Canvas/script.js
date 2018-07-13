const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Setting the canvas size equal to the browser size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting the stroke styles
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'lighten';

// Creating a variable to check if the user is drawing
// (only on click down)
let isDrawing = false;

// Creating variables to determine the x and y positions
let lastX = 0;
let lastY = 0;

// Creating variables to determine the hue of the color and to
// determine whether the lineWidth must become bigger or smaller
let hue = 0;
let direction = true;

function draw(e) {
    // Stopping the fn from running when they are not moused down
    if(!isDrawing) return;

    console.log(e);

    // Starting to draw
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);  // Start from
    ctx.lineTo(e.offsetX, e.offsetY); // Go to
    ctx.stroke();

    // ES6 destructuring
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // This is the same as (but shorter):
    //lastX = e.offsetX;
    //lastY = e.offsetY;

    // Creating a rainbow color effect
    hue++;

    // Resetting the color after getting to red again
    if(hue >= 360) {
        hue = 0;
    }

    // Changing the direction of the lineWidth
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
};

canvas.addEventListener('mousedown', (e) => { 
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);