// Drawing shape Practice
// Jade
// Feb 10th 2025
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let boxX = 200, boxY = 100;

function setup() {
  createCanvas(windowWidth,windowHeight);
  drawBox();
}

function draw() {
  background(220);
  fill(255,155,55);
  rect(boxX,boxY,50,30,5,5,0,0);
  rect(boxX,boxY -50,30);
}

function keyPressed(){
  if(key === "a"){
    boxX = 0;
  }
  if(key === "b"){
    boxY = 400;
  }
  if(keyCode === ESCAPE){
    boxX = width*0.85;
    boxY = height*0.6;
  }
}
