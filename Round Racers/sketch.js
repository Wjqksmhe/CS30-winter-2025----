// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let firstRoundRacer;
let secondRoundRacer;
let thirdRoundRacer;

let randomColor = ["red","orange","yellow","green","blue","purple"];

function chooseRandomColor(){
  let randomNum = Math.floor(Math.random() * (randomColor.length));
  let randomChooseColor = randomColor[randomNum];
  randomColor.splice(randomNum,1);
  return randomChooseColor;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  firstRoundRacer = new RoundRacer(height / 2, chooseRandomColor());
  secondRoundRacer = new RoundRacer(height / 2 + height / 4, chooseRandomColor());
  thirdRoundRacer = new RoundRacer(height / 2 - height / 4, chooseRandomColor());
}

function draw() {
  background(0);
  firstRoundRacer.display();
  firstRoundRacer.move();
  secondRoundRacer.display();
  secondRoundRacer.move();
  thirdRoundRacer.display();
  thirdRoundRacer.move();
}

class RoundRacer {
  constructor(y, color) {
    this.xPosition = 0;
    this.yPosition = y;
    this.xSpeed = Math.random() * (15 - 3) + 3;
    this.color = color;
  }

  display() {
    fill(this.color);
    circle(this.xPosition, this.yPosition, 100);
  }

  move() {
    this.xPosition += this.xSpeed;

    if (this.xPosition > width) {
      this.xPosition = 0;
    }
  }
}
