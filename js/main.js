var digiproject6 = digiproject6 || {};

digiproject6.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

digiproject6.game.state.add('Boot', digiproject6.Boot);
digiproject6.game.state.add('Preload', digiproject6.Preload);
digiproject6.game.state.add('MainMenu', digiproject6.MainMenu);
digiproject6.game.state.add('Game', digiproject6.Game);

digiproject6.game.state.start('Boot');