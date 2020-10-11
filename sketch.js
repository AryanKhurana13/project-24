
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,600, 25)
	dustbin=new Dustbin(600,686)
	ground=new Ground(400,695,800,10)

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);

   paper.display();
   dustbin.display();
	ground.display();
 
}
function keyPressed() {
if (keyCode=== UP_ARROW)  {
	Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
}


}




