// State Variables and Timing
// Jade
// Feb 13, 2025

let shapeState = 1;
let startTime, elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawShape(){
  switch(shapeState){
    case 1:
      circle(width/2,height/2,150);
      break;
    case 2:
      square(width/2,height/2,150);
      break;
    case 3:
      triangle(x-50,y+50,x+50,y-50,x,y-25);
      break;
    case 4:
      for(let i=0;i<20;i++){
        let x = random(width*0.4,width*0.6);
        let y = random(height*0.4,height*0.6);
        line(x,y,x+25,y);
      }
      break;
  }
}

function keyPressed(){
  if(shapeState < 4){
    shapeState++;
  }
}

function draw() {
  background(220);
  drawShape()
}
