function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // Stop the function if there's no audio file attached to the selected data-key
    if(!audio) return;

    // Reset the audio, so there's no delay and you can press the same key over and over again
    audio.currentTime = 0;    

    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    // The 'transitionend' event is only attached to the 'transform' property
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing'); 
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);