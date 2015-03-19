var digiproject6 = digiproject6 || {};

//title screen
digiproject6.Game = function(){};

digiproject6.Game.prototype = {
  create: function() {
  	//set world dimensions
    this.game.world.setBounds(0, 0, 1800, 1300);

    this.score = 0;

    //background
    this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'sky');
    this.background.autoScroll(-20,0);
    this.grounds = this.game.add.group();
    this.grounds.enableBody = true;

    //building the map
    //horizontal
    this.ground = this.grounds.create(0, this.game.world.height - 50, 'lbrick');
    this.ground = this.grounds.create(0, 0, 'lbrick');
    this.ground = this.grounds.create(0, 0, 'tbrick');
    this.ground = this.grounds.create(this.game.world.width - 50, 0, 'tbrick');
    for(var x=0; x< this.game.world.width/50; x++){
       if(x<10 && x >= 4 || x<32 && x>25){
       this.ground = this.grounds.create(50*x, 200, 'bricks');
       this.ground.body.setSize(50,40,0,10);
       this.ground = this.grounds.create(50*x, this.game.world.height -250, 'bricks');
       this.ground.body.setSize(50,40,0,10);
       }
       if(x > 12 && x <23){
       this.ground = this.grounds.create(50*x, this.game.world.height - 250, 'bricks');
       this.ground.body.setSize(50,40,0,10);
       this.ground = this.grounds.create(50*x, 200, 'bricks');
       this.ground.body.setSize(50,40,0,10);
       }
       if(x >= 9 && x <=26 && x!= 16 && x!= 17 && x!= 18 && x!=19){
         this.ground = this.grounds.create(50*x, this.game.world.height - 450, 'bricks');
         this.ground.body.setSize(50,40,0,10);
         this.ground = this.grounds.create(50*x, 400, 'bricks');
         this.ground.body.setSize(50,40,0,10);
       }
       if(x >= 13 && x <=22){
         this.ground = this.grounds.create(50*x, this.game.world.height - 600, 'bricks');
         this.ground.body.setSize(50,40,0,10);
         this.ground = this.grounds.create(50*x, 550, 'bricks');
         this.ground.body.setSize(50,40,0,10);
       }
    }
    //vertical
    for(var y=0; y< this.game.world.height/50;y++){
      if(y > 3 && y < 21){
         this.ground = this.grounds.create(200, 50*y, 'bricks');
         this.ground.body.setSize(50,40,0,10);
         this.ground = this.grounds.create(this.game.world.width - 250, 50*y, 'bricks');
         this.ground.body.setSize(50,40,0,10);
         if(y > 7 && y < 18){
          this.ground = this.grounds.create(400, 50*y, 'bricks');
          this.ground.body.setSize(50,40,0,10);
          this.ground = this.grounds.create(this.game.world.width - 450, 50*y, 'bricks');
          this.ground.body.setSize(50,40,0,10);
       }
     }
    }
    this.grounds.setAll('body.immovable', true);

    // create shamrocks
    this.shamrocks = this.game.add.group();
    this.shamrocks.enableBody = true;
    for(var z=1; z < (this.game.world.width-100)/125; z++){
      this.shamrock = this.shamrocks.create(125*z, 100, 'shamrock');
      this.shamrock.scale.setTo(.2);
      this.shamrock = this.shamrocks.create(125*z, this.game.world.height - 150, 'shamrock');
      this.shamrock.scale.setTo(.2);
      if(z < 10){
        this.shamrock = this.shamrocks.create(125, 105*(z+1), 'shamrock');
        this.shamrock.scale.setTo(.2);
        this.shamrock = this.shamrocks.create(this.game.world.width - 175, 105*(z+1), 'shamrock');
        this.shamrock.scale.setTo(.2);
      }
    }
    for(var a=0; a<10; a++){
      this.shamrock = this.shamrocks.create(305+(125*a), 300,'shamrock');
      this.shamrock.scale.setTo(.2);
      this.shamrock = this.shamrocks.create(305+(125*a), this.game.world.height - 350,'shamrock');
      this.shamrock.scale.setTo(.2);
      if(a < 4){
        this.shamrock = this.shamrocks.create(305, 425+(a*125), 'shamrock');
        this.shamrock.scale.setTo(.2);
        this.shamrock = this.shamrocks.create(this.game.world.width - 370, 425+(a*125), 'shamrock');
        this.shamrock.scale.setTo(.2);
      }
      else{
        this.shamrock = this.shamrocks.create((140*a)-40, 485, 'shamrock');
        this.shamrock.scale.setTo(.2);
        this.shamrock = this.shamrocks.create((140*a)-40, this.game.world.height - 525, 'shamrock');
        this.shamrock.scale.setTo(.2);
        this.shamrock = this.shamrocks.create((140*a)-40, this.game.world.centerY - 15, 'shamrock');
        this.shamrock.scale.setTo(.2);
      }
    }

    this.pots = this.game.add.group();
    this.pots.enableBody = true;


    //create player
    this.player = this.game.add.sprite(100, this.game.world.height-150, 'lepre');
    this.player.scale.setTo(1.5);

    //enable player physics
    this.game.physics.arcade.enable(this.player);
    this.player.animations.add('left', [0, 1, 2, 3], 20, true);
    this.player.animations.add('right', [5, 6, 7, 8], 20, true);
    this.player.animations.add('down', [9, 10, 11, 12], 20, true);
    this.player.animations.add('up', [13, 14, 15, 16], 20, true);

    //the camera will follow the player in the world
    this.game.camera.follow(this.player);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    
    this.collectSound = this.game.add.audio('collect');
  },
  update: function() {
    this.game.physics.arcade.collide(this.player, this.grounds);
    this.game.physics.arcade.overlap(this.player, this.shamrocks, this.collect, null, this);
    this.game.physics.arcade.overlap(this.player, this.pots, this.gameOver, null, this);

    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;
    
    if (this.cursors.left.isDown)
    {
        //  Move to the left
        this.player.body.velocity.x = -400;

        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        //  Move to the right
        this.player.body.velocity.x = 400;

        this.player.animations.play('right');
    }
    else if (this.cursors.down.isDown){
        this.player.body.velocity.y = 400;
        this.player.animations.play('down');
    }
    else if(this.cursors.up.isDown){
        this.player.body.velocity.y = -400;
        this.player.animations.play('up');
    }
    else
    {
        //  Stand still
        this.player.animations.stop();

        this.player.frame = 4;
    }

    if(this.score == 10){
      var text = "LIAR!";
      var style = { font: "200px Algerian Regular", fill: "#000000", align: "center" };
      var t = this.game.add.text(this.game.world.randomX, this.game.world.randomY, text, style);
      t.anchor.set(0.5);
    }
    if(this.score == 20){
      var text = "FAKE!";
      var style = { font: "260px Times New Roman", fill: "#000000", align: "center" };
      var t = this.game.add.text(this.game.world.randomX, this.game.world.randomY, text, style);
      t.anchor.set(0.5);
    }
    if(this.score == 30){
      var text = "HACK!";
      var style = { font: "200px Algerian Regular", fill: "#000000", align: "center" };
      var t = this.game.add.text(this.game.world.randomX, this.game.world.randomY, text, style);
      t.anchor.set(0.5);
    }
    if(this.score == 40){
      var text = "STOP PRETENDING!";
      var style = { font: "260px Times New Roman", fill: "#000000", align: "center" };
      var t = this.game.add.text(this.game.world.randomX, this.game.world.randomY, text, style);
      t.anchor.set(0.5);
    }
    if(this.score == 90){
      this.pot = this.pots.create(this.game.world.centerX, this.game.world.centerY - 30, 'pot');
      this.pot.scale.setTo(.2);
    }

    
  },

  collect: function(player, shamrock){
    this.collectSound.play();
    shamrock.destroy();
    this.score +=1;
  },

  gameOver: function(player, pot){
      pot.destroy();
      this.game.state.start('End', true, false);
  }
};
