/**
 * 
 * @author Joshua Ciffer
 * @version 02/16/2018
 */
var points = [];
var numPoints = 0;

function setup() {
	createCanvas(500, 500);
	frameRate(60);
}

function draw() {
	background(0);
	for (let i = 0; i < points.length; i++) {
		points[i].drawPoint();
	}
	if (keyIsPressed === true) {
		constructLineSegments(points);
	}
	drawLines();
}

function mousePressed() {
	points[numPoints++] = new Point(createVector(mouseX, mouseY));
}
