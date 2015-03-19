var digiproject6 = digiproject6 || {};

//loading the game assets
digiproject6.Preload = function(){};

digiproject6.Preload.prototype = {
  preload: function() {
  	//show loading screen


    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
  	this.load.image('sky', 'assets/images/sky.png');
    this.load.image('lbrick', 'assets/images/longbrick.png');
    this.load.image('tbrick', 'assets/images/tallbrick.png');
    this.load.image('bricks', 'assets/images/brick.png');
    this.load.image('shamrock', 'assets/images/rock.png');
    this.load.spritesheet('lepre', 'assets/images/lepresprite.png', 32, 48);
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};