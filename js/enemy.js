class Enemy {
    constructor(x, y, hp, defense, dir) {
        this.x = x;
        this.y = y;

        if (dir == "left") {
            this.acceleration_x = -1;
        } else if (dir == "right") {
            this.acceleration_x = 1;
        }

        this.hp = hp;
        this.defense = defense;

        this.throwed = 0;
    }

    update() {
        this.x += this.acceleration_x;

        if (this.hp <= 0) {
            return false;
        }

        return true;
    }
}