const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// Putting the last checked box in a variable to remember it
let lastChecked;

handleCheck = function(e) {
    // Checking if the shift key is pressed down
    // AND checking if the box is checked
    let inBetween = false;

    if(e.shiftKey && this.checked) {
        // Looping over every single checkbox
        checkboxes.forEach(checkbox => {
            // Extra check to prevent that all the items will be
            // selected when holding the shift key right from
            // the beginning
            if(lastChecked) {
                // Setting the flag to determine which of the
                // boxes are going to be in between
                if(checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                }
    
                if(inBetween) {
                    checkbox.checked = true;
                }
            }            
        });
    }
    lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));