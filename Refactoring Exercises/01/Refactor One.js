//state values a,b,c,d
let a,b,c,d;
function setup() {
createCanvas(windowWidth, windowHeight);
	xValue = 200; 
	yValue = 300; 
	randomXValue = random(3,8); 
	randomYValue = random(3,8);
}
//draw picutures loop would show the rectangle all the time, using the random rectangle function
function draw() {
	randomXYofRect();
	background(80,80,80);
	rect(xValue,yValue,250,75);
}
function randomXYofRect(){
	xValue += randomXValue; 
	yValue += randomYValue;
	//if Y or X value is bigger than its length or width, they change back to original x y value(200 and 300)
	if (yValue >= height-75 || yValue <=0){
		randomXValue = randomXValue * -1;
	}
	if (xValue >= width-250 || xValue<=0){
		randomXValue = randomXValue * -1;
	}
}