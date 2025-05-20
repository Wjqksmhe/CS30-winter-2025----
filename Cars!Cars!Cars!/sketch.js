

let firstCar,secondCar,thirdCar,forthCar;
const car = 0;
const truck = 1;
const left = 0;
const right = 1;
let eastbound = [];
let westbound = [];
const colorList = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "coral",
  "gold",
  "orchid",
  "turquoise",
  "violet",
  "salmon",
  "skyblue",
  "springgreen",
  "chartreuse",
  "tomato",
  "fuchsia",
  "mediumslateblue",
  "darkorange",
  "deeppink"
];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let redLight = false;
let redLightCounter = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //test codes, if wanna test delete "// "
  // firstCar = new Vehicle(car,"red",20,height/4 + height/8,right,2)
  // secondCar = new Vehicle(car,"red",150,height/2 + height/8,left,2)
  // thirdCar = new Vehicle(truck,"yellow",320,height/2 + height/8,left,2)
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(Math.round(Math.random()),colorList[Math.floor(Math.random()*colorList.length)],0,getRandomInt(height/4 + 20, height/2 - 50),1,2));
  }
  for (let i = 0; i < 20; i++) {
    westbound.push(new Vehicle(Math.round(Math.random()),colorList[Math.floor(Math.random()*colorList.length)],width,getRandomInt(height/2 + 20, height - height/4 - 50),0,2));
  }
}










function draw() {
  background(220);
  drawRoad();
  trafficLights(redLight);
  
  //test codes if wanna test delete "// ""
  // firstCar.action();
  // secondCar.action();
  // thirdCar.action();
  for (let car of eastbound){
    car.action();
  }
  for (let car of westbound){
    car.action();
  }
}




function drawRoad() {
  fill(0);
  rect(0, height / 4, width, height / 2);
 
  stroke(255);
  strokeWeight(4);
 
  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2);
  }
}




class Vehicle {




  constructor(type,color,xPosition,yPosition,direction,xSpeed){
    this.type = type;
    this.color = color;
    this.x = xPosition;
    this.y = yPosition;
    this.direction = direction;
    this.speed = xSpeed;
  }




  display(){
    noStroke();
    fill(this.color);
    if(this.type === 0){
      if(this.direction === 1){
        rect(this.x,this.y,50,30);
        rect(this.x + 25,this.y-10,20,10);
        fill("gray");
        circle(this.x+5,this.y +30,20);
        circle(this.x + 45,this.y +30,20);
      }
      else if(this.direction === 0){
        rect(this.x,this.y,50,30);
        rect(this.x + 5,this.y-10,20,10);
        fill("gray");
        circle(this.x+5,this.y +30,20);
        circle(this.x + 45,this.y +30,20);
      }
     
    }
    else {
      if(this.direction === 1){
        rect(this.x,this.y,50,35);
        rect(this.x+52,this.y,10,35);
        rect(this.x+52,this.y+15,20,20);
        fill("gray");
        circle(this.x+5,this.y +35,20);
        circle(this.x + 60,this.y +35,20);
      }
      else if(this.direction === 0){
        rect(this.x,this.y,50,35);
        rect(this.x - 12,this.y,10,35);
        rect(this.x - 25,this.y+15,20,20);
        fill("gray");
        circle(this.x-12,this.y +35,20);
        circle(this.x + 45,this.y +35,20);
      }
    }
  }


  move(){
    if(this.direction === 1){
      this.x += this.speed;
    }
    else if(this.direction === 0){
      this.x -= this.speed;
    }
  }


  speedUp(){


    let randomAddSpeed = Math.floor(Math.random()*10)+1;
    if(this.speed + randomAddSpeed > 15){
      this.speed = 15;
    }
    else {
      this.speed += randomAddSpeed;
    }


  }


  speedDown(){


    let randomMinusSpeed = Math.floor(Math.random()*10)+1;
    if(this.speed - randomMinusSpeed > 0){
      this.speed -= randomMinusSpeed;
    }
    else {
      this.speed = 0;
    }


  }


  changeColor(){
    let randomColor = Math.floor(Math.random()*colorList.length);
    this.color = colorList[randomColor];


  }


  action(){


    this.display();
    this.move();
    let randomAction =  Math.floor(Math.random()*100)+1
    if(randomAction === 1){
      this.speedUp();
    }
    if(randomAction === 2){
      this.speedDown();
    }
    if(randomAction === 3){
      this.changeColor();
    }




  }




}


function keyPressed() {
  if (keyCode === LEFT_ARROW && keyIsDown(SHIFT)) {
    westbound.push(new Vehicle(Math.round(Math.random()),colorList[Math.floor(Math.random()*colorList.length)],width,getRandomInt(height/2 + 20, height - height/4 - 50),0,2));
  }
  else if (keyCode === LEFT_ARROW) {
    eastbound.push(new Vehicle(Math.round(Math.random()),colorList[Math.floor(Math.random()*colorList.length)],0,getRandomInt(height/4 + 20, height/2 - 50),1,2));
  }
}

function keyReleased() {
  if(key === ' ') {
    redLight = true;
    redLightCounter = 120;
  }
}

function trafficLights(someBoolean){
  fill("black");
  rect(30,80,20,165);
  fill("black");
  rect(10,10,60,100);
  if(someBoolean === true){
    fill("gray");
    circle(40,80,30);
    fill("red");
    circle(40,40,30);
    console.log("the light is red now");
  }
  if(someBoolean === false){
    fill("green");
    circle(40,80,30);
    fill("gray");
    circle(40,40,30);
  }
  if (redLightCounter < 0) {
    redLightCounter--;
    console.log(redLightCounter);
    if (redLightCounter <= 0) {
      redLight = false;
    }
  }
  
}










