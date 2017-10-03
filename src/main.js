const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_canvas');

game.state.add('menu', new Menu());
game.state.add('game', new Game());

game.state.start('menu');
