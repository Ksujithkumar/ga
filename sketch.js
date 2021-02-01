
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree
var boy,stone

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,10)
  tree = new Tree(800,400,40,30)

	
  
}


function draw() {
  background(200);
  Engine.update(engine);

  ground.display();
  tree.display();





  drawSprites();
 
}



