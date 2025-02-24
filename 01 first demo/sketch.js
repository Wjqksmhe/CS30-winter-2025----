// User Events
// Jade
// Feb 7th 2025
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);

  fill("green");
  textSize(tSize);
  text(mouseX + "," + mouseY + " " + mouseButton, mosueX, mouseY);
  mousePressed();

  fill(255,200,100);
  square(x,200,50,5);
}

function mousePressed(){
  tSize = random(5,100);
}

