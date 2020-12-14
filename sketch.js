var wall,thickness;
var car,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
car=createSprite(50,200,50,50);
car.shapeColor="cyan";
car.velocityX=speed
thickness=random(22,83)
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="brown"; 

}



function draw() {
  background(0);  
  

    if (wall.x - car.x <= car.width/2+wall.width/2   ){
      car.velocityX=0;
Deformation=0.5*weight*speed*speed/22500
if(Deformation>=100){
  car.shapeColor="red"
}
  
  if(Deformation<70){
    car.shapeColor="green"
  }
    
  }
  

  drawSprites();
}
