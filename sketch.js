const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground

var ball;
var chain1
var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ball = new pendulum(600,250)

    chain1 = new chain(ball.body,{x:600,y:20})
}

function draw(){
   background("grey") 
   Engine.update(engine)
  ground.display()
  
  ball.display()

  chain1.display();  
  
}

function mouseDragged()
    {
        Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-90})


    }

