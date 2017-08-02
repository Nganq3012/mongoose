class ShipType2Controller extends ShipController {
    constructor(x, y, spriteSuffix, config) {
        super(
            x,
            y,
            `Spaceship1${spriteSuffix}.png`,
            config
        );
        this.config.SHIP_SPEED = 300;
    }

    fire() {
        new BulletType2Controller(this.sprite.x, this.sprite.y,{})
    }
}