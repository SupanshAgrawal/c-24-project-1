const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron=new Iron(330,470,80,50);
    stone=new Stone(700,470,80,100 );
  

    sand1=new Sand(250,470);
   sand2=new Sand(260,470);
   sand3=new Sand(270,470);
   sand4=new Sand(280,470);
   sand5=new Sand(290,470);
   sand6=new Sand(300,470);

   rubber=new Rubber(1000,370,20,10);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
iron.display();

sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();

stone.display();

rubber.display();
    
 
}