/**
 * 
 * @author Joshua Ciffer
 * @version 02/16/2018
 */
var points = [];
var numPoints = 0;

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0);
	for (let i = 0; i < points.length; i++) {
		points[i].drawPoint();
	}
	drawLines();
}

function mousePressed() {
	points[numPoints++] = new Point(createVector(mouseX, mouseY));
}

function keyPressed() {
	constructLineSegments(points);
}