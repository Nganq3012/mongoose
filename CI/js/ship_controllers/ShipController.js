class ShipController {
    constructor(x, y, spriteName, config) {
        this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
        this.config = config;
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);

        this.sprite.body.collideWorldBounds = true;
        this.sprite.update = this.update.bind(this);
        this.fire_key = Nakama.keyboard.addKey(this.config.FIRE);
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
        if (Nakama.game.time.time > this.nextShotTime){

        }
        this.fire_key.onDown.add(this.fire, this);
    }

    fire(){

    }
}