/**
 * This file contains the main setup() and draw() functions to create the sketch.
 * 
 * @author Joshua Ciffer
 * @version 02/22/2018
 */

/**
 * Runs once to create the canvas on the web page.
 * 
 * @returns void
 */
function setup() {
	createCanvas(500, 500);
	frameRate(60);
}

/**
 * Loops repeatedly and updates the canvas with whatever is drawn.
 * 
 * @returns void
 */
function draw() {
	background(0);
	drawPoints();	// Draws all of the points that have been created.
	drawLines();	// Draws any line segments that connect any points.
}

/**
 * Creates a new point wherever the user clicks.
 * 
 * @returns void
 */
function mousePressed() {
	createPoint(createVector(mouseX, mouseY));
}

/**
 * Runs the algorithm to construct any line segments when a key is pressed.
 * 
 * @returns void
 */
function keyPressed() {
	constructLineSegments(points);
}