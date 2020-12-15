var leftRect,bottomRect,rightRect ;
var paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    bottomRect=createSprite(1400,380,200,20)
	bottomRect.shapeColor=color("pink")

	leftRect=createSprite(1500,340,20,100)
	leftRect.shapeColor=color("pink")

	rightRect=createSprite(1300,340,20,100)
	rightRect.shapeColor=color("pink")
	ground = new Ground(600,height,2000,20)
	Engine.run(engine);

	paperObject= new Paper(20,200,30,30)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperObject.display();
  drawSprites();
  keypressed();
 
}

function keypressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:2,y:-2})
		
	}
}

