let startButton = document.querySelector("button[value='start']");
let stopButton = document.querySelector("button[value='stop']");
let resetButton = document.querySelector("button[value='reset']");

let watch = document.querySelector(".clock p");

let activeIdent;
let timer = 1;

function DisplayStopWatch() {
    console.log(`Timer at ${timer}`);
    watch.textContent = `${timer.toString()}s`;
    timer++;
}

function startStopWatch() {
    startButton.disabled = true;
    stopButton.disabled = false;

    console.log("Starting stopwatch...");
    activeIdent = setInterval(DisplayStopWatch, 1000);
}

function stopStopWatch() {
    console.log("Stopping stopwatch...");
    clearInterval(activeIdent);

    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetStopWatch() {
    console.log("Resetting stopwatch...");
    clearInterval(activeIdent);

    startButton.disabled = false;
    stopButton.disabled = true;
    watch.textContent = "0s";
    timer = 1;
}

startButton.addEventListener("click", startStopWatch);
stopButton.addEventListener("click", stopStopWatch);
resetButton.addEventListener("click", resetStopWatch);

resetStopWatch();