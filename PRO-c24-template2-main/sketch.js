const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1,sand1,rubber1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron1 = new iron(300,350);
    sand1 = new sand(700,320);
    rubber1= new Rubber(900,400,30);
    rubber2= new Rubber(100,100,30)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron1.display();
    rubber1.display();
    sand1.display();
    rubber2.display();
    
 
}