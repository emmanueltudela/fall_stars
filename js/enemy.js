class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.acceleration_y = 1;

        this.hp = 100;
    }

    update() {
        this.y += this.acceleration_y;

        if (this.hp <= 0) {
            return false;
        }

        return true;
    }
}