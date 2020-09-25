var r1, r2;

function setup() {
  createCanvas(800,400);
  r1=createSprite(600, 300, 20, 50);
  r1.shapeColor="brown";
  r2=createSprite(400, 200, 20, 50);
  r2.shapeColor="yellow";
}

function draw() {
  background(255,255,255);  

  r1.x=World.mouseX;
  r1.y=World.mouseY;

  if((r1.x-r2.x<r1.width/2+r2.width/2)&&
   (r2.x-r1.x<r1.width/2+r2.width/2) && (r1.y-r2.y<r1.height/2+r2.height/2)&& (r2.y-r1.y<r1.height/2+r2.height/2)){
     r1.shapeColor="green";
  }
  else {
    r1.shapeColor="brown";
  }
  drawSprites();
}