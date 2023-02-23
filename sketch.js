let snake;
let rez = 10;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  //Calculates the closest int value
  w = floor(width/rez);
  h = floor(height/rez);
  frameRate(5)
  snake = new Snake();
  foodLocation();
}
function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x,y);
}

function draw() {
  scale(rez);
  background(220);
  snake.update();
  snake.show();

  noStroke();
  fill(255,0,0);
  rect(food.x, food.y,1,1);

}

function keyPressed(){
  //Check for User-Input

  if(keyCode === DOWN_ARROW){
    snake.setDir(0, 1);
  }
  if(keyCode === UP_ARROW){
    snake.setDir(0, -1);
  }
  if(keyCode === LEFT_ARROW){
    snake.setDir(-1, 0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.setDir(1, 0);
  }   
}
/*
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
*/