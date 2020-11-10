var bullet, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,60,20);
  bullet.shapeColor = color("white")

   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = color("white");

   speed = random(223,321);
   weight = random(30,52);
   thickness = random(22,83);
}

function draw (){

  background(0,0,0);  



   bullet.velocityX = speed;

   bullet.debug = true;


   if(hascollided(bullet,wall)){
     bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

     if(damage>10){
       wall.shapeColor = color("green");
     }

     if(damage<10){
       wall.shapeColor = color("red");
     }
   }

  drawSprites();
}

function hascollided(lBullet,lWall){

  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }

  return false;

}