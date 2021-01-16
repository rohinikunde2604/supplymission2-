var helicopterIMG, helicopterSprite, packageSprite,packageIMG,redbox,redbox1,redbox2;
var packageBody,ground,redboxBody,redboxBody1,redboxBody2
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

	redbox=createSprite(400,650,100,20);
	redbox.shapeColor='red';

	redbox1=createSprite(350,610,20,100);
	redbox1.shapeColor='red';

	redbox2=createSprite(460,610,20,100);
	redbox2.shapeColor='red';

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {restitution:0, isStatic:true} );
 	World.add(world, ground);

	
	 redboxBody=Bodies.rectangle(width/2, 680, width, 100, {restitution:0, isStatic:true});
	World.add(world, redboxBody);

	redboxBody1=Bodies.rectangle(width/2, height, 330, 20, {restitution:0, isStatic:true});
	World.add(world, redboxBody1);

	redboxBody2=Bodies.rectangle(width/2, height, 360, 20, {restitution:0, isStatic:true});
	World.add(world, redboxBody2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     packageSprite.velocityY=3;
    
  }
}
 


