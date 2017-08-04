class BulletType3Controller extends BulletController {
    constructor(x, y, configs) {
        super(x, y, "BulletType2.png", configs);
        this.configs = configs;
        this.sprite.outOfBoundsKill = false;
        this.configs.startingY = y;
        this.configs.startingX = x;
        this.sprite.body.velocity.y = -1200;
        this.sprite.update = this.update.bind(this);
    }
    update(){
       if (this.sprite.position.y<this.configs.startingY/2){
           this.sprite.destroy();
           new BulletType1Controller(this.sprite.position.x-10,this.sprite.position.y);
           new BulletType1Controller(this.sprite.position.x+10,this.sprite.position.y);

       }

    }
}