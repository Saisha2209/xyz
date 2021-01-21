var canvas;
var music;
var red,yellow,green,pink,orange,blue,purple,magenta,brown,white;
var ball;
var invisible1;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,700);

    //create 4 different surfaces
red=createSprite(100,680,200,20)
red.shapeColor="red";
yellow=createSprite(310,680,200,20)
yellow.shapeColor="yellow";
green=createSprite(520,680,200,20)
green.shapeColor="green";
pink=createSprite(730,680,200,20)
pink.shapeColor="pink";
orange=createSprite(940,680,200,20)
orange.shapeColor="orange"
blue=createSprite(100,20,200,20)
blue.shapeColor="blue";
purple=createSprite(310,20,200,20)
purple.shapeColor="purple";
magenta=createSprite(520,20,200,20)
magenta.shapeColor="magenta";
white=createSprite(940,20,200,20)
white.shapeColor="white";
brown=createSprite(730,20,200,20)
brown.shapeColor="brown";

ball=createSprite(20,Math.round(random(100,500)),40,40);
ball.shapeColor="skyBlue";
ball.velocityX=5;
ball.velocityY=5;
invisible1=createSprite(980,350,20,700)
invisible1.visible=false;

}

function draw() {
  //  background(rgb(169,169,169));
    background("black")
    //create edgeSprite
drawSprites()
createEdgeSprites();
//bounceOff(ball,edges)
bounceOff(ball,red);
bounceOff(ball,yellow)
bounceOff(ball,blue);
bounceOff(ball,white);
bounceOff(ball,magenta);
bounceOff(ball,orange);
bounceOff(ball,pink);
bounceOff(ball,purple)
bounceOff(ball,brown);
bounceOff(ball,green);
bounceOff(ball,invisible1)

if (bounceOff(ball,red)){
    ball.shapeColor("red")

}
if (bounceOff(ball,yellow)){
    ball.shapeColor("yellow")

}
if (bounceOff(ball,blue)){
    ball.shapeColor("blue")
}
if (bounceOff(ball,white)){
    ball.shapeColor("white")
}
if (bounceOff(ball,magenta)){
    ball.shapeColor("magenta")
}
if (bounceOff(ball,orange)){
    ball.shapeColor("orange")
}
if ( bounceOff(ball,pink)){
    pink.shapeColor("pink")

}
if (bounceOff(ball,purple)){
    ball.shapeColor("purple")
}
if (bounceOff(ball,brown)){
    ball.shapeColor("brown")
}
if (bounceOff(ball,green)){
    ball.shapeColor("green")
}

//bounceOff(ball,rightEdge);
//bounceOff(ball,leftEdge);
    //add condition to check if box touching surface and make it box
}
function bounceOff(a,b){
    if (a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2){
        a.velocityX=a.velocityX*-1
        b.velocityX=b.velocityX*-1
    }
    if (a.y-b.y<a.height/2+a.height/2 && b.y-a.y<a.height/2+b.height/2){
        a.velocityY=a.velocityY*-1;
        b.velocityY=b.velocityY*-1;
    }
}
function isTouching(){
if (a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 &&a.y-b.y<a.height/2+a.height/2 && b.y-a.y<a.height/2+b.height/2 ){
    return true;
  
}else {
    return false;
}

}