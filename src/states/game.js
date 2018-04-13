class Game extends Phaser.State {

    // ===== 'Phaser.State' CONSTRUCTOR =====
    // This is ES6 Standard; it's a simple way
    // to call the constructor from the parent class.
    constructor() {
	super();
    }

    // ============ STATE LOADER ============
    // Is the first method to run on the state; its sole
    // purpose is to load the assets you want to use.
    preload() {
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48, 9);
    }

    // =========== STATE CREATION ===========
    // Is the method to create the state and all the objects
    // you want to appear on the state. It only happens once!
    create() {
	console.log("Game!");
	this.background = this.game.add.image(this.game.width,this.game.height,'background');
	this.background.angle = 180;
	//Changer le background : this.input.onDown.add(this._startGame, this);
    this.bot = game.add.sprite(200, 200, 'dude');
    this.bot.animations.add('run');
    this.bot.animations.play('run', 15, true);
	//Active la physique du jeu
    this.game.physics.enable(this.bot, Phaser.Physics.ARCADE);
    this.destinationX=0;
    this.destinationY=0;




    }

    // ============= GAME LOOP! =============
    // This is the game loop method! It will be called as close
    // to 60fps in the browser as it can.
    update() {
    	
    	//game.physics.arcade.moveToXY(object,x,y,speed,maxTime);
    	game.physics.arcade.moveToXY(this.bot,this.destinationX,this.destinationY,400);


    //game.physics.arcade.moveToPointer(this.bot, 400);
    if (this.game.input.mousePointer.isDown){


    	this.destinationX = game.input.x;

		this.destinationY = game.input.y;
	}
    }

    // ========== PRIVATE METHODS ===========
    // Remember to be careful not to name any private method
    // of the class as one of the reserved methods, or things
    // will go awry.
    _startGame () {
	this.game.state.start('game');
    }
}
