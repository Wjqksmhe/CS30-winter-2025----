// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  flowerRepeat(width/2,height/2,200);
}

function flowerRepeat(x,y,size){
  push();
  translate(x,y);
  rotate(10);
  ellipse(0,0,size/2 ,size *2);
  ellipse(0,0,size/2 ,size *2);
  circle(0,0,size);
  pop();
}