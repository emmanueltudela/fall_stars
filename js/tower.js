class Tower {
    constructor(x, y, hp, defense) {
        this.x = 0;
        this.y = 0;

        this.hp = hp;
        this.defense = defense * 2;
    }

    update() {
        // Gerer ici la perte d'HP

        if (this.hp <= 0) {
            return false;
        }

        return true;
    }
}