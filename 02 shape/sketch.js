// Drawing shape Practice
// Jade
// Feb 10th 2025
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let colorOfMorningSky = [
  [
    70,130,180
  ],
  [
    135, 206, 235
  ],
  [
    173, 216, 230
  ],
  [
    255, 165, 79
  ],
  [
    255, 102, 51
  ],
  [
    72, 61, 139
  ]
];

let morningColorInArray = 0;

let timeState = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  fill(255,255,255);
}

//colorOfMorningSky[morningColorInArray][0],colorOfMorningSky[morningColorInArray][1],colorOfMorningSky[morningColorInArray][2]

function draw() {
  
  if(timeState === 0){
    background(   
      colorOfMorningSky[morningColorInArray][0],
      colorOfMorningSky[morningColorInArray][1],
      colorOfMorningSky[morningColorInArray][2]);
  }
  if(timeState === 1){
    background(15,15,30);
  }
  fill(255, 204, 102);
  circle(mouseX,mouseY,50);
  fill(0,0,0);
  circle(mouseX-10,mouseY-5,10);
  fill(0,0,0);
  circle(mouseX+10,mouseY-5,10);
  fill(255,255,255);
  circle(mouseX-7,mouseY-7,5);
  fill(255,255,255);
  circle(mouseX+7,mouseY-7,5);
  fill(0,0,0);
  rect(0,windowHeight-windowHeight/15,windowWidth,60);
  fill(0,0,0);
  rect(40,windowHeight/2,70,700);
  fill(0,0,0);
  rect(120,100,90,1200);
  fill(0,0,0);
  rect(120,100,90,2800);
}

//fill(34, 139, 34);
//rect

function keyPressed(){
  if(timeState === 0){
    timeState ++;
  }
  else {
    timeState = 0;
  }
}

function checkMouse() {
  window.addEventListener("mousemove", function() {
    if (mouseY >= windowHeight/7) {
      morningColorInArray = 0;
    }
    if (mouseY >= windowHeight / 7*2) {
      morningColorInArray = 1;
    }
    if (mouseY >= windowHeight / 7*3) {
      morningColorInArray = 2;
    }
    if (mouseY >= windowHeight / 7*4) {
      morningColorInArray = 3;
    }
    if (mouseY >= windowHeight / 7*5) {
      morningColorInArray = 4;
    }
    if (mouseY >= windowHeight) {
      morningColorInArray = 5;
    }
  });
}

checkMouse();


