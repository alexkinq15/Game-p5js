//color rects
var value1 = 0;
var value2 = 255;
//var Player
var x1 = 0;
var y1 = 0;
var x2 = 50;
var y2 = 50;
// Player movement
var speed = 3;
//var 2nd rect
var value_x1 = 150;
var value_y1 = 150;
var value_x2 = 150;
var value_y2 = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //Movement Player
  fill(value1);
  rect(x1, y1, x2, y2);
  Player();
  //Drawing Rect for collision
  fill(value2);
  rect(value_x1,value_y1,value_x2,value_y2);
  Collision();
  
}

function Player(){
  //Check for User-Input
  if(keyCode === DOWN_ARROW && keyIsPressed){
    y1 = y1 + speed;
  }
  if(keyCode === UP_ARROW && keyIsPressed){
    y1 = y1 - speed;
  }
  if(keyCode === LEFT_ARROW && keyIsPressed){
    x1 = x1 - speed;
  }
  if(keyCode === RIGHT_ARROW && keyIsPressed){
    x1 = x1 + speed;
  }   
  
  if(x1 < 0){
    x1 = 0;
  }
  if(x1 > 350){
    x1 = 350;
  }
  if(y1 < 0){
    y1 = 0;
  }
  if(y1 > 350){
    y1 = 350;
  }
}

function Collision(){
  //Checks if Player is has no collision
  let PlayerLeft = (x1 + x2) < value_x1;
  let PlayerRight = x1 > (value_x1 + value_x2);
  let PlayerUnder = (y1 + y2) < value_y1;
  let PlayerAbove = y1 > (value_y1 + value_y2);

  //Checks if Player has collision
  if(!(PlayerLeft||PlayerRight||PlayerUnder||PlayerAbove)){
    print("Collision Detected!")
    value2 = 150;
  }
  else{
    value2 = 255;
  }
}