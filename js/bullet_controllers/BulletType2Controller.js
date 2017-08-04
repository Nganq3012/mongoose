class BulletType2Controller extends BulletController {
    constructor(x, y, configs) {
        super(x, y, "BulletType2.png", configs);
        this.configs = configs;
        this.configs.startingY = y;
        if (configs.type === 'left') {
            this.sprite.body.velocity.x = -200;
            this.sprite.body.velocity.y = 200;

        } else {
            this.sprite.body.velocity.x = 200;
            this.sprite.body.velocity.y = 200;
        }
        // if(!Nakama.player2Shoot.isPlaying)
        Nakama.player2Shoot.play();

        setTimeout(this.moveToEnemy.bind(this), 300)

    }

    moveToEnemy() {
        this.sprite.update = this.update.bind(this);
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
    }


    update() {
        let target = Nakama.enemyGroup.getFirstAlive();
        if (target !== null && target !== undefined && this.sprite.position.y > target.position.y) {
            console.log()
            let deltaX = target.position.x - this.sprite.position.x;
            let deltaY = target.position.y - this.sprite.position.y;
            let angle = Math.atan2(deltaY, deltaX);
            this.sprite.body.velocity.x = 200 * Math.cos(angle);
            this.sprite.body.velocity.y = 200 * Math.sin(angle);
        } else {
            this.sprite.body.velocity.y = -200;
        }

    }


}