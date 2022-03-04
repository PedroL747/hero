const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxe = []
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1350, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,200,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

 
  for(var i=0;i<6;i++){
    var boexe=new Box(600,200)
   
    boxe.push(boexe)
  }
  for(var i=0;i<6;i++){
    var boexe=new Box(700,200)
   
    boxe.push(boexe)
  }
  for(var i=0;i<6;i++){
    var boexe=new Box(800,200)
   
    boxe.push(boexe)
  }
  for(var i=0;i<6;i++){
    var boexe=new Box(900,200)
   
    boxe.push(boexe)
  }
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  for(var i =0;i<boxe.length;i++){
    boxe[i].display()
  }


  hero.display();
  rope.display();
  monster.display();
  if(mouseIsPressed){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
   }  
}
