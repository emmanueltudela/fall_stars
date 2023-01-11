const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const framerate = 60;
const interval = 1000 / framerate;
let now;
let then = Date.now();
let delta;

function draw() {
    requestAnimationFrame(draw);

    now = Date.now();
    delta = now - then;

    if (delta > interval) {
        then = now - (delta % interval);

        // Dessinez ici
    }
}

draw();