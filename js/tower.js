class Tower {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;

        this.hp = 100;
        this.defense = 0;
    }

    update() {
        // Gerer ici la perte d'HP

        if (this.hp <= 0) {
            return false;
        }

        return true;
    }
}