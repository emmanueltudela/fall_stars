class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.acceleration_y = 0;
    }

    update() {
        this.y += this.acceleration_y;
    }
}