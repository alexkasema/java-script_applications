const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const stopBtn = document.getElementById('stop-btn');

const display = document.getElementById('display');

let timer = null; //! is going to hold the ID of set interval so we can keep track of it
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; //! if the stopwatch is running we will flip this to be `true` flip it to be `false` to stop it.

startBtn.onclick = () => {
    if (!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
stopBtn.onclick = () => {
    if (isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
resetBtn.onclick = () => {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); //! divide by 10 to get the first 2 digits

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}