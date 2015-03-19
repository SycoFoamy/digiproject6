var digiproject6 = digiproject6 || {};

//title screen
digiproject6.MainMenu = function(){};

digiproject6.MainMenu.prototype = {
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'sky');
    
    //give it speed in x
    this.background.autoScroll(-20, 0);

    //start game text
    var text = "You wake up in a dreamlike state, surrounded by green bricks.";
    var style = { font: "30px Arial", fill: "#00B800", align: "center" };
    var t = this.game.add.text(this.game.width/2, 30, text, style);
    t.anchor.set(0.5);
    text = "Scattered around are shamrocks that you feel compelled to pick up.";
    style = { font: "30px Arial", fill: "#00B800", align: "center" };
    t = this.game.add.text(this.game.width/2, 60, text, style);
    t.anchor.set(0.5);
    text = "But BEWARE.....";
    style = { font: "60px Arial", fill: "#00B800", align: "center" };
    t = this.game.add.text(this.game.width/2, 200, text, style);
    t.anchor.set(0.5);
    text = "The farther you delve into the world of your subconscious,";
    style = { font: "30px Arial", fill: "#00B800", align: "center" };
    t = this.game.add.text(this.game.width/2, 300, text, style);
    t.anchor.set(0.5);
    text = "the more intense the realization becomes.";
    style = { font: "30px Arial", fill: "#00B800", align: "center" };
    t = this.game.add.text(this.game.width/2, 330, text, style);
    t.anchor.set(0.5);
    text = "Click to begin";
    style = { font: "50px Arial", fill: "#00B800", align: "center" };
    t = this.game.add.text(this.game.width/2, 450, text, style);
    t.anchor.set(0.5);

  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};