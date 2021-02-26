
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper1 = new Paper(100,10,20,20)
	Engine.run(engine);
  
}


function draw() {

  background(230);
  rectMode(CENTER);
  paper1.display();
  groundObject.display();
  dustbinObj.display();

  
}


