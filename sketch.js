const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var dustbin;
function setup() {
	createCanvas(2000, 700);

	engine = Engine.create();
	world = engine.world;

	ball= new Ball(200,650,20);
	dustbin=new Dustbin(1200,650,300,10)
	ground = new Ground(400,670,2000,10);
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("black");
  dustbin.display();
  ground.display();
  ball.display();
  
}
function keyPressed(){
 if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
 }
}



