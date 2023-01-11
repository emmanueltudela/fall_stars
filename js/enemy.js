class Enemy {
    constructor(x, y, hp, defense) {
        this.x = x;
        this.y = y;

        this.acceleration_y = 0;

        this.hp = hp;
        this.defense = defense;
    }

    update() {
        this.y += this.acceleration_y;

        if (this.hp <= 0) {
            return false;
        }

        return true;
    }
}