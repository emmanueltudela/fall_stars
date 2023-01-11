class Enemies {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.acceleration_x = 0;
    }

    update() {
        this.y += this.acceleration_y;
    }
}