class Goblin extends Enemy {
    constructor(x, y) {
        this.hp = 50;
        this.defense = 5;

        super(x, y, this.hp, this.defense);
    }
}