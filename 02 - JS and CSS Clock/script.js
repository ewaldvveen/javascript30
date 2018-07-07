function setDate() {
    const now = new Date();    
    const hours = now.getMinutes();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Convert the hours, minutes and seconds to degrees
    // Add 90 to offset the default of 90 deg in the CSS
    const hoursDegrees = ((minutes / 12) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    // Modify the CSS
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

setInterval(setDate, 1000);
