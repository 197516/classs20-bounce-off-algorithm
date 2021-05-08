var rect , rectangle

function setup() {
  createCanvas(1200,800);
 rect = createSprite(400, 200, 50, 50);
 rect.shapeColor= "yellow";
 rect.velocityY=2;

 rectangle = createSprite(400,400,50,50);
 rectangle.shapeColor = "yellow";
 rectangle.velocityY=-2;
}

function draw() {
  background(0);  
 

  if(rect.x-rectangle.x<rect.width/2+rectangle.width/2  && 
   rectangle.x-rect.x<rect.width/2+rectangle.width/2  ){
     rect.velocityX=rect.velocityX*(-1);
     rectangle.velocityX=rectangle.velocityX*(-1);
   }
  if( rect.y-rectangle.y<rect.height/2+rectangle.height/2  && 
   rectangle.y-rect.y<rect.height/2+rectangle.height/2 ){
    rect.velocityY=rect.velocityY*(-1);
    rectangle.velocityY=rectangle.velocityY*(-1);
  }
  drawSprites();
}