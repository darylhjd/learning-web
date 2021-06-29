const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
}

// This event listener replaces the displayed image with the clicked thumbnail
thumbBar.addEventListener("click", function (event) {
    displayedImage.setAttribute("src", event.target.getAttribute("src"));
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function (event) {
    let cls, text, bg;
    if (btn.getAttribute("class") === "dark") {
        cls = "light";
        text = "Lighten";
        bg = "rgba(0,0,0,0.5)";
    } else {
        cls = "dark";
        text = "Darken";
        bg = "rgba(0,0,0,0)";
    }
    btn.setAttribute("class", cls);
    btn.textContent = text;
    overlay.style.backgroundColor = bg;
});