class Projectile {
    constructor(x, y, thrower) {
        this.x = x;
        this.y = y;

        this.acceleration_x = 0;
        this.acceleration_y = 0;
    }

    update() {
        this.x += this.acceleration_x;
        this.y += this.acceleration_y;
    }
}