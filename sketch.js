// define variables
var car, wall;
var speed, weight;
var deformation;


function setup() {
  // create canvas
  createCanvas(1600,400);

  // make random speed and weight
  speed = Math.round(random(50, 90));
  weight = Math.round(random(500, 1500));
  // calculate deformation
  deformation = (0.5*weight*speed*speed)/22500;

  // cerate car sprite
  car = createSprite(50, 200, 50, 50);
  // make velocity X the speed
  car.velocityX = speed;

  // create wall sprite
  wall = createSprite(1450, 200, 50, 200);
  wall.shapeColor = color(80, 80, 80);


}

function draw() {
  // black background
  background(0);  

  // show speed, weight and deformation as text
  textSize(20);
  text("speed is: " + speed, 50, 50);
  text("weight is: " + weight, 250, 50);
  text("deformation is: " + deformation, 450, 50);

  // if the car is colliding with the wall
  if(collide(car, wall) === true)
  {
    // make the car stop
    car.velocityX = 0;
    // set color based on deformation
    if(deformation>180)
    {
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 80)
    {
      car.shapeColor = color(230, 230, 0);
    }
    if(deformation < 80)
    {
      car.shapeColor = color(0, 255, 0);
    }  
  }

  // draw sprites
  drawSprites();
}

// collide function
function collide(obj1, obj2)
{
  // if the objects are touching
  if(obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 &&
    obj2.x - obj1.x <= obj1.width/2 + obj2.width/2 &&
    obj1.y - obj2.x <= obj1.height/2 + obj2.height/2 &&
    obj2.y - obj1.x <= obj1.height/2 + obj2.height/2)
  {
    // give true
    return true;
  }
  else
  {
    // else give false
    return false;
  }
}
