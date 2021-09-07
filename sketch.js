const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16;
var ballImg

var engine,world
function preload(){
 ballImg = loadImage("polygon.png")
}

function setup(){
createCanvas(1600,800)

engine=Engine.create()
world=engine.world

ground1 = new Ground(800,790,1600,10)
stand1 = new Ground(800,600,300,10)
stand2 = new Ground(1200,400,200,10)

box1= new Box(700,575,"red")
box2= new Box(730,575,"red")
box3= new Box(760,575,"red")
box4= new Box(790,575,"red")
box5= new Box(820,575,"red")
box6= new Box(850,575,"red")
box7= new Box(880,575,"red")
box8= new Box(730,535,"blue")
box9= new Box(760,535,"blue")
box10= new Box(790,535,"blue")
box11= new Box(820,535,"blue")
box12= new Box(850,535,"blue")
box13= new Box(760,495,"green")
box14= new Box(790,495,"green")
box15= new Box(820,495,"green")
box16= new Box(790,455,"black")

box17= new Box(1130,375,"red")
box18= new Box(1160,375,"red")
box19= new Box(1190,375,"red")
box20= new Box(1220,375,"red")
box21= new Box(1250,375,"red")
box22= new Box(1160,335,"blue")
box23= new Box(1190,335,"blue")
box24= new Box(1220,335,"blue")
box25= new Box(1190,295,"green")

ball = Bodies.circle(50,550,20)
World.add(world,ball)

slingshot1 = new SlingShot(this.ball,{x:200,y:500})
 
   
}


function draw(){
background("purple")
Engine.update(engine)




ground1.display()
stand1.display()
stand2.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()

box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()

slingshot1.display()

imageMode(CENTER)
image(ballImg,ball.position.x,ball.position.y,40,40)
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot1.fly()
}