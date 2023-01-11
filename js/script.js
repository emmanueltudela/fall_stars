const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const enemies = [];
enemies.push(new Enemy(10, 10));

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

        // Mise a jour des objets

        for (let i = enemies.length - 1; i >= 0; i--) {
            if (!enemies[i].update()) {
                enemies.splice(i, 1);
            }
        }

        // Dessinez ici

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#FFF";
        for (let i = enemies.length - 1; i >= 0; i--) {
            ctx.fillRect(enemies[i].x, enemies[i].y, 10, 10);
        }
    }
}

draw();