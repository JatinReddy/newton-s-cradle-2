
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var myMouse, mConstraint;
 

function preload()
{
	
}

function setup() {
    canvas = createCanvas(800, 700);
    
    myMouse = Mouse.create(canvas.elt)
    myMouse.pixelRatio = pixelDensity();

  var options = {
    mouse: myMouse
  }


	engine = Engine.create();
    world = engine.world;
    
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);


	//Create the Bodies Here.
	bob1 = new Bob(250,300,30);
	roof = new Roof(350,100,400,30);
	
	bob2 = new Bob(300,300,30);
	bob3 = new Bob(350,300,30);
	bob4 = new Bob(400,300,30);
	bob5 = new Bob(450,300,30);
	rope1 = new Rope(bob1.body,roof.body,-120,0)
	
	rope2 = new Rope(bob2.body,roof.body,-60,0)
	
	rope3 = new Rope(bob3.body,roof.body,0,0);
	
	rope4 = new Rope(bob4.body,roof.body,+60,0);
	
	rope5 = new Rope(bob5.body,roof.body,+120,0);
	
	Engine.run(engine);
  
}


function draw() {
  
  
  background("white");
  Engine.update(engine);

  drawSprites();

 
  bob1.display();
  roof.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
 
}



    
       






