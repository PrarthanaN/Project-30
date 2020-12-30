const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  block1, block2, block3, block4, block5, block6, block7, block8, block9;
var  block10, block11, block12, block13, block14, block15, block16;
var  block17, block18, block19, block20, block21, block22, block23, block24, block25;
var ground1, ground2;
var ball;
var slingShot;

function preload()
{
    polygonImg = loadImage("polygon.png");
}

function setup()
{
    createCanvas(600, 600);
    background(56, 44, 44);

    engine = Engine.create();
    world = engine.world;

    block1 = new Block(390, 235, 30, 40);
    block2 = new Block(420, 235, 30, 40);
    block3 = new Block(450, 235, 30, 40);
    block4 = new Block(480, 235, 30, 40);
    block5 = new Block(510, 235, 30, 40);

    block6 = new Block(420, 195, 30, 40);
    block7 = new Block(450, 195, 30, 40);
    block8 = new Block(480, 195, 30, 40);

    block9 = new Block(450, 155, 30, 40);

    ground1 = new Ground(450, 260, 190, 10);

    block10 = new Block(180, 400, 30, 40);
    block11 = new Block(210, 400, 30, 40);
    block12 = new Block(240, 400, 30, 40);
    block13 = new Block(270, 400, 30, 40);
    block14 = new Block(300, 400, 30, 40);
    block15 = new Block(330, 400, 30, 40);
    block16 = new Block(360, 400, 30, 40);

    block17 = new Block(210, 360, 30, 40);
    block18 = new Block(240, 360, 30, 40);
    block19 = new Block(270, 360, 30, 40);
    block20 = new Block(300, 360, 30, 40);
    block21 = new Block(330, 360, 30, 40);

    block22 = new Block(240, 320, 30, 40);
    block23 = new Block(270, 320, 30, 40);
    block24 = new Block(300, 320, 30, 40);

    block25 = new Block(270, 280, 30, 40);

    ground2 = new Ground(270, 425, 300, 10);

   ball = Bodies.circle(50, 200, 20);
   World.add(world, ball);

    slingShot = new SlingShot(this.ball, {x: 100, y: 200});

    //rectMode(CENTER);
   //imageMode(CENTER);
}

function draw()
{
    background(56, 44, 44);
    Engine.update(engine);

    strokeWeight(1);
    stroke(15);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();

    block9.display();

    ground1.display();

    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    ground2.display();

    imageMode(CENTER);
    image(polygonImg, ball.position.x, ball.position.y, 40, 40);

    slingShot.display();

    drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(this.ball, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}
