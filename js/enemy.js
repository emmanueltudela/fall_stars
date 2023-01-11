class Enemy {
    constructor(x, y, hp, defense) {
        this.x = x;
        this.y = y;

        this.acceleration_x = 0;

        this.alive = true;
        this.hp = hp;
        this.defense = defense;

        this.throwed = 0;
    }

    move() {
        this.x += this.acceleration_x;
    }

    updateDeathState() {
        if (this.hp <= 0) {
            this.alive = false;
        }
    }

    takeDamages(damages) {
        this.hp -= damages;
    }

    update() {
        this.move();
        this.updateDeathState();
    }
}