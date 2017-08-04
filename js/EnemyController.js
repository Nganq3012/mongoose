class EnemyController {
    constructor(x, y, spriteName, configs){
        this.sprite = Nakama.enemyGroup.create(x, y, 'assets', spriteName);
        this.sprite.anchor = new Phaser.Point(0.5, 0.5);

        this.configs = configs;
        this.configs.moveRadius = 100;
        this.configs.startingX = x;
        this.configs.startingY = y;
        this.sprite.health=this.configs.health;

        this.sprite.update = this.update.bind(this);
    }

    update(){
        this.sprite.position.x =
            this.configs.startingX + this.configs.moveRadius * Math.sin(Nakama.game.time.time / 1000);
        this.sprite.position.y =
            this.configs.startingY + this.configs.moveRadius * Math.cos(Nakama.game.time.time / 1000);
    }
}