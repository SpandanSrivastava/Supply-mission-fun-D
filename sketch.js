var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,medicBox1,medicBox2,medicBox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 30 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	medicBox1 = createSprite(400,650,200,20);
	medicBox1.shapeColor = ("red");
	medicBox2 = createSprite(310,600,20,100);
	medicBox2.shapeColor = ("red");
	medicBox3 = createSprite(510,610,20,100);
	medicBox3.shapeColor = ("red");
	

	medicBox1 = Bodies.rectangle({isStatic:true});
	World.add(world, medicBox1);
	medicBox2 = Bodies.rectangle({isStatic:true});
	World.add(world, medicBox2);
	medicBox3 = Bodies.rectangle({isStatic:true});
	World.add(world, medicBox3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



