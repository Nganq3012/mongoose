class BulletController{
    constructor(x,y,spriteName){
        this.configs={}
        this.sprite=Nakama.game.add.sprite(x, y, 'assets', spriteName);
        Nakama.game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds=true;
        this.configs.BULLET_SPEED=200;
        this.sprite.update=this.update.bind(this);
    }
    update(){
        this.sprite.body.velocity.y=-500;
        if (this.sprite.body.blocked.up === true){
            this.sprite.destroy()
        }
    }
}