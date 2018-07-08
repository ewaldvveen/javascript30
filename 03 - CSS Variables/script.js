const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // Set the data type (pixels) when nescessary.
    // If there is no type available, just set it to nothing.
    const suffix = this.dataset.sizing || '';

    // Selecting the CSS variable using the 'name' property of 
    // the input controls and set the property value
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

// Triggering two events. Not only when the input has changed and
// you let go off the mouse, but also when moving the mouse.
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));