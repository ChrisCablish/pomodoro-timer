const time = document.getElementById('time');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let currentTime = 1500;

time.innerText = formatTime(currentTime);
let intervalID

function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
}

function startTimer() {
    intervalID = setInterval(()=>{
        currentTime--;
        time.innerText = formatTime(currentTime);

        if (currentTime === 0) {
            clearInterval(intervalID);
            playAlarm()
        }
    }, 1000);
}

start.addEventListener('click', () => { 
    start.disabled = true;
    pause.disabled = false;
    startTimer();
});

pause.addEventListener('click', () => {
    start.disabled = false;
    pause.disabled = true;
    clearInterval(intervalID);
})

reset.addEventListener('click', () => {
    start.disabled = false;
    pause.disabled = false;
    if (currentTime === 0) {
        alarm.pause();
    }
    currentTime = 1500;
    time.innerText = formatTime(currentTime);
    clearInterval(intervalID);
})

let alarm
function playAlarm() {
    alarm = new Audio('/audio/mixkit-scanning-sci-fi-alarm-905.wav');
    alarm.play();
  }





