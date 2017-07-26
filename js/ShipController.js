class ShipController {
    constructor(x, y, spriteName, config) {
        this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
        Nakama.game.physics.arcade.enable(this.sprite);
        this.config = config;
        this.config.SHIP_SPEED = 300;
        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.bullets = []
    }

    update() {
        if (Nakama.keyboard.isDown(this.config.LEFT)) {
            this.sprite.body.velocity.x = -this.config.SHIP_SPEED;
        } else if (Nakama.keyboard.isDown(this.config.RIGHT)) {
            this.sprite.body.velocity.x = this.config.SHIP_SPEED;
        } else {
            this.sprite.body.velocity.x = 0;
        }
        if (Nakama.keyboard.isDown(this.config.UP)) {
            this.sprite.body.velocity.y = -this.config.SHIP_SPEED;
        } else if (Nakama.keyboard.isDown(this.config.DOWN)) {
            this.sprite.body.velocity.y = this.config.SHIP_SPEED;
        } else {
            this.sprite.body.velocity.y = 0;
        }
        var fire_key = Nakama.keyboard.addKey(this.config.FIRE);
        fire_key.onDown.add(function () {
            this.bullets.push(
                new BulletController(this.sprite.position.x + (this.sprite.width / 2)-20, this.sprite.position.y - (this.sprite.height / 2), 'BulletType1.png'))
        }, this);//20 la nửa height của viên đạn
    }
}