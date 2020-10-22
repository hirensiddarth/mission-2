var packageSprite,packageIMG,helicopterIMG, helicopterSprite,wall2,wall3;
var packageBody,ground,wall1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	packageIMG=loadImage("package.png")
	helicopterIMG=loadImage("helicopter.png")
	
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

	wall1Sprite=createSprite(400,650,200,20);
	wall1Sprite.shapeColor="red";
	

	wall2=createSprite(300,620,20,100);
	wall2.shapeColor="red";

	wall3=createSprite(500,620,20,100);
	wall3.shapeColor="red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
	packageBody.setvelocityY=0;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    wall1=Bodies.rectangle(400,550,200,20,{isStatic:false});
    World.add(world,wall1);

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
 if (keyCode=== DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
 Matter.Body.setStatic(packageBody,false)
  
packageBody.setvelocityY=10;   
 }
}