// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let terrainWidth = 10;
let terrainLoop = [];
let drawingLoop = 0;
let showDrawing = false;
let xoff = parseFloat(0.0);
let highestPoint = 0;
let highestHill;
let flagHeight = 40;
let recycleBin = [];
let viewportStart = 0;




function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}


function showTerrain() {
  drawingLoop = 0;
  for (let height of terrainLoop) {
    rect(drawingLoop, windowHeight - height, terrainWidth, height);
    drawingLoop += terrainWidth;
  }
  drawFlag(highestHill, windowHeight - highestPoint - flagHeight);
}

function draw() {
  background(220);
  //keep visual
  /**/
  showTerrain();
}




function resetLoop() {
  drawingLoop = 0;
  highestPoint = 0;
}




function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    if (terrainWidth > 5) {
      terrainWidth -= 5;
      resetLoop();
      generateTerrain();
    }
  }
  if (keyCode === RIGHT_ARROW) {
    terrainWidth += 5;
    resetLoop();
    generateTerrain();
  }
  if (keyCode === ENTER) {
    resetLoop();
    generateTerrain();
    showDrawing = true;
  }
  if (keyCode === BACKSPACE) {
    showDrawing = false;
    resetLoop();
  }
  if (key === "d") {
    recycleBin.push(terrainLoop.shift());
  }
  if (key === "a") {
    if (recycleBin.length !== 0) {
      terrainLoop.unshift(recycleBin.pop());
    }
  }
}




function mouseWheel(event) {
  if (event.delta < 0) {
    if (recycleBin.length !== 0) {
      terrainLoop.unshift(recycleBin.pop());
    }
  }
  if (event.delta > 0) {
    recycleBin.push(terrainLoop.shift());
  }
  showTerrain();
}






function generateTerrain() {
  for (let i = 0; i <= windowWidth; i += terrainWidth) {
    let n = noise(xoff);
    let randomNum = n * (windowHeight - 0);
    if (randomNum > highestPoint) {
      highestPoint = randomNum;
      highestHill = i;
    }
    fill(0, 0, 0);
    rect(i, windowHeight - randomNum, terrainWidth, randomNum);
    terrainLoop.push(randomNum);
    xoff += 0.01
  }
}


function drawFlag(x, y) {
  rect(x, y, 3, flagHeight);
}