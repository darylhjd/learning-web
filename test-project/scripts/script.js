let cursor = document.querySelector("#cursor");

function blinkCursor() {
    cursor.style.color = (cursor.style.color === "black") ? "white" : "black";
}

setInterval(blinkCursor, 500);