var digiproject6 = digiproject6 || {};

//title screen
digiproject6.End = function(){};

digiproject6.End.prototype = {
  create: function() {
    //show the space tile, repeated
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'sky');
    
    //give it speed in x
    this.background.autoScroll(-20, 0);

    //start game text
    var text = "Tap to begin your story";
    var style = { font: "30px Arial", fill: "#00B800", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);

    

  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};