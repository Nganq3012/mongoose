class ShipType3Controller extends ShipController {
    constructor(x, y, spriteSuffix, config) {
        super(
            x,
            y,
            `Spaceship3${spriteSuffix}.png`,
            config
        );
        this.config.SHIP_SPEED = 500;
    }

    fire() {
        new BulletType3Controller(this.sprite.x, this.sprite.y,{})
        new BulletType3Controller(this.sprite.x, this.sprite.y,{})
    }
}