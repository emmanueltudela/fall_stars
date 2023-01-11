class Arrow extends Projectile {
    constructor(x, y, thrower) {
        thrower.throwed++;
        super(x, y, thrower);
    }
}