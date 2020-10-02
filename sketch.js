
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	var dustB,dustBR,dustBL;
	var ground;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 var dustB = createSprite(550,610,100,20);
     var dustBL = createSprite(490,600,20,40);
     var dustBR = createSprite(610,600,20,40);
     var ground = createSprite(400,620,800,10);

    ball = new Paper(200,600,40,Options)
	Engine.run(engine);
  
}
     

function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  dustBL.display();
  dustBR.display();
  dustB.display();
  ground.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if(keyCode===UP_Arrow){
	matter.bodies.applyForce(paperObject.body,paperObject.body.position{x:85,y:-85});


  }

}


