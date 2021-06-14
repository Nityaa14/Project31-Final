const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
 // arrays for particles, plinko and division
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
   for(var j = 75; j <=width-20; j=j+50)
  {
    plinkos.push(new Plinko (j, 275))
  }
  //create 4th row of plinko objects
   for(var j = 50; j <=width-30; j=j+50)
  {
    plinkos.push(new Plinko (j, 375))
  }

  
  
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //make particles
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2 -30, width/2 +30), 10, 10))

  }

  //display the paricles 
  for(var p = 0; p< particles.length; p++) {
    particles[p].display();
    
  }

}