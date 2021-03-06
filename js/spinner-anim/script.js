const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timeStamp) {
    if (!startTime) {
        startTime = timeStamp;
    }

    rotateCount = (timeStamp - startTime) / 3;
    rotateCount %= 360;
    spinner.style.transform = `rotate(${rotateCount}deg)`;
    rAF = requestAnimationFrame(draw);
}

draw();