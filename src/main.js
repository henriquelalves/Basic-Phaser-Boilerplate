// WELCOME TO THE MAIN SCRIPT!

// It's a very boring script, but it's useful to make
// the code more understandable.

// First, we need to define our Phaser game using the
// Phaser script we are loading on index.html

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_canvas');

// Since we are loading the other scripts on index.html BEFORE
// loading this script, we know we have the state classes up and
// running, so we can create them using 'new' (ES6!).

// So let's just add them to our game.state!

game.state.add('menu', new Menu());
game.state.add('game', new Game());

// Finally, we have to start from somewhere, so let's choose a
// state to begin our game!

game.state.start('menu');
