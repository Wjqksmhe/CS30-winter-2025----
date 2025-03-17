// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let a = [22,11,5,5,90,80,60,70];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let total = 0;
  for(let i = 0;i <= a.length;i++){
    total += a[i];
    console.log(total);
  }
}

function draw() {
  background(220);
  
}
