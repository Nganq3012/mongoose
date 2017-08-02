class BulletType2Controller extends BulletController {
    constructor(x, y, config) {
        super(x, y, "BulletType2.png", config);
        this.sprite.body.velocity.y = -1500;
    }
}