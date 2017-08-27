var Nakama = {};
Nakama.configs = {
    GAME_WIDTH: 640,
    GAME_HEIGHT: 960,
    PLAYER_WIDTH: 200,
    PLAYER_HEIGHT: 200
};

window.onload = function () {
    Nakama.game = new Phaser.Game(Nakama.configs.GAME_WIDTH, Nakama.configs.GAME_HEIGHT, Phaser.AUTO, '',
        {
            preload: preload,
            create: create,
            update: update,
            render: render
        }, false, false
    );
}

// preparations before game starts
var preload = function () {
    Nakama.game.scale.minWidth = Nakama.configs.GAME_WIDTH / 2;
    Nakama.game.scale.minHeight = Nakama.configs.GAME_HEIGHT / 2;
    Nakama.game.scale.maxWidth = Nakama.configs.GAME_WIDTH;
    Nakama.game.scale.maxHeight = Nakama.configs.GAME_HEIGHT;
    Nakama.game.scale.pageAlignHorizontally = true;
    Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    Nakama.game.load.audio('player1Shot', 'Assets/sounds/shootPlayer.wav');
    Nakama.game.load.audio('player2Shot', 'Assets/sounds/shootPlayer2.wav');

    Nakama.game.time.advancedTiming = true;

    Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function () {
    Nakama.players = [];
    Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
    Nakama.keyboard = Nakama.game.input.keyboard;
    Nakama.background = Nakama.game.add.sprite(0, -960, 'background')
    Nakama.bulletGroup = Nakama.game.add.physicsGroup();
    Nakama.playerGroup = Nakama.game.add.physicsGroup();
    Nakama.enemyGroup = Nakama.game.add.physicsGroup();
    Nakama.player1Shoot=Nakama.game.add.audio('player1Shot');
    Nakama.player2Shoot=Nakama.game.add.audio('player2Shot');

    Nakama.players.push(new ShipType1Controller(0, 930, '-Player',
        {
            UP: Phaser.Keyboard.UP,
            DOWN: Phaser.Keyboard.DOWN,
            LEFT: Phaser.Keyboard.LEFT,
            RIGHT: Phaser.Keyboard.RIGHT,
            FIRE:Phaser.Keyboard.SPACEBAR
        })
    );
    Nakama.players.push(new ShipType2Controller(600, 930, '-Partner',
        {
            UP: Phaser.Keyboard.W,
            DOWN: Phaser.Keyboard.S,
            LEFT: Phaser.Keyboard.A,
            RIGHT: Phaser.Keyboard.D,
            FIRE:Phaser.Keyboard.F
        }
    ));
    Nakama.players.push(new ShipType3Controller(600, 930, '-Partner',
        {
            UP: Phaser.Keyboard.EIGHT,
            DOWN: Phaser.Keyboard.TWO,
            LEFT: Phaser.Keyboard.FOUR,
            RIGHT: Phaser.Keyboard.SIX,
            FIRE:Phaser.Keyboard.FIVE
        }
    ));
    Nakama.enemies = [];
    setInterval(addEnemy,3000);


}
var addEnemy=function(){
    Nakama.enemies.push(new EnemyController(320,200,'EnemyType1.png',{health:5}))
    console.log('maddasdad')
}

// update game state each frame
var update = function () {
    Nakama.background.position.y += 5;
    if (Nakama.background.position.y >= 0) {
        Nakama.background.position.y += -960
    }
    Nakama.game.physics.arcade.overlap(
        Nakama.bulletGroup,
        Nakama.enemyGroup,
        onBulletHitEnemy
    );



}
var onBulletHitEnemy= function (bulletSprite, enemySprite) {
    bulletSprite.kill();
    enemySprite.damage(1);

}

// before camera render (mostly for debug)
var render = function () {

}
