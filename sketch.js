const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic: true,
  }
  ground=Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground);
  //console.log(ground);
  var ball_options = {
    restitution:1.1}
  ball=Bodies.circle(200, 200, 20, ball_options)
  World.add(world,ball);
  console.log(ball);

}

function draw() {
  var pos=ground.position;
  Engine.update(engine);
  var ball_position=ball.position;
  background(0); 
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20) ;
  ellipseMode(CENTER);
  ellipse(ball_position.x, ball_position.y, 20, 20)
}