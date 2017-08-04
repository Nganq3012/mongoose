class ShipType2Controller extends ShipController {
    constructor(x, y, spriteSuffix, config) {
        super(
            x,
            y,
            `Spaceship1${spriteSuffix}.png`,
            config
        );
        this.config.SHIP_SPEED = 200;
    }

    fire() {
        new BulletType2Controller(this.sprite.x, this.sprite.y,{type:'left'});
        new BulletType2Controller(this.sprite.x, this.sprite.y,{type:'right'});

    }
}