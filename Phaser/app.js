var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude','assets/dude.png',32,48);
	game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create() {
	//enable acrade game physics in the game
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//create sky
	game.add.sprite(0,0,'sky');

	//add platforms as a group, that contains ground and the 2 ledges
	platforms = game.add.group();
	platforms.enableBody = true;

	//create the ground inside the group
	var ground = platforms.create(0,game.world.height-50,'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	//add the 2 ledges
	var ledge = platforms.create(-150,250,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(400,400,'ground');
	ledge.body.immovable = true;

	//add a player to the game
	player = game.add.sprite (32,game.world.height -150,'dude');
	//adding player animations
	player.animations.add('left',[0,1,2,3],10,true);
	player.animations.add('right',[5,6,7,8],10,true);
	//run physics on the player
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;
	cursors = game.input.keyboard.createCursorKeys();

	stars = game.add.group();
	stars.enableBody = true;
	for ( var i =0; i<12;i++){
		var star = stars.create(60*i, 20,'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.6 + Math.random()*0.3;
	}



}

function update() {
	//collision between player and platforms
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(stars,platforms);
	game.physics.arcade.overlap(player,stars,collectStar,null,this);

	if(cursors.left.isDown){
		player.body.velocity.x =-150;
		player.animations.play('left');
	}
	else if(cursors.right.isDown){
		player.body.velocity.x  = 150;
		player.animations.play('right');
	}
	else{
		player.body.velocity.x = 0;
		player.animations.stop();
		player.frame = 4;
	}
	if (cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}
	function collectStar(player,star){
		star.kill();
	}

}