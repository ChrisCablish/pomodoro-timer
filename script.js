const time = document.getElementById('time');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

//MAKE THE START BUTTON WORK
//when user clicks start, timer starts decrementing by 1 every second, starting with 25mins



let currentTime = 1500;

time.innerText = currentTime;

start.addEventListener('click', () => { 
    start.disabled = true;
    const intervalID = setInterval(()=>{
        currentTime--;
        time.innerText = currentTime;
    }, 1000);
});

pause.addEventListener('click', () => {
    start.disabled = false;
    pause.disabled = true;
    clearInterval(intervalID);

})



