class Menu extends Phaser.State {

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
	this.game.load.image('background', 'assets/background.png');
    }

    // =========== STATE CREATION ===========
    // Is the method to create the state and all the objects
    // you want to appear on the state. It only happens once!
    create() {
	console.log("Menu!");
	this.background = this.game.add.image(0,0,'background');
	this.input.onDown.add(this._startGame, this);
    }

    // ============= GAME LOOP! =============
    // This is the game loop method! It will be called as close
    // to 60fps in the browser as it can.
    update() {
    }

    // ========== PRIVATE METHODS ===========
    // Remember to be careful not to name any private method
    // of the class as one of the reserved methods, or things
    // will go awry.
    _startGame () {
	this.game.state.start('game');
    }
}
