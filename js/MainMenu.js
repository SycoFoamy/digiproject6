var digiproject6 = digiproject6 || {};

//title screen
digiproject6.MainMenu = function(){};

digiproject6.MainMenu.prototype = {
  init: function(score) {
     var score = score || 0;
    this.pauseScore = this.pauseScore || 0;

    this.pauseScore = Math.max(score, this.pauseScore);
   },
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

    if(this.pauseScore == 10){
    var text = "As you begin to collect shamrocks, memories start flooding back into your mind.";
    var style = { font: "30px Arial", fill: "#00B800", align: "center" };
    var t = this.game.add.text(this.game.width/10, this.game.height/4, text, style);
    t.anchor.set(0.5);
    }

  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};