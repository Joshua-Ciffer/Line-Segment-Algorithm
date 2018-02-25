/**
 * This file contains a constructor function that creates a point object.  The point object contains a vector with an x and y value that are passed as a parameter
 * from mousePressed() in Sketch.js.
 * 
 * @author Joshua Ciffer
 * @version 02/22/2018
 */

/**
 * Array containing all of the points that get placed.
 */
var points = [];

/**
 * Iterator used when adding points to the array.
 */
var numPoints = 0;

/**
 * Creates a new point.
 * 
 * @param position - Position vector with the point's x and y coordinates.
 * @returns void
 */
function createPoint(position) {
	points[numPoints++] = new Point(position);
}

/**
 * Constructor function that creates a new point object. The position of the point is stored in a vector object which contains its x and y position.
 * 
 * @param position - The point's vector.
 * @returns new Point
 */
function Point(position) {

	/**
	 * The point's x and y position.
	 */
	this.position = position;

	/**
	 * Draws this point.
	 */
	this.drawPoint = function() {
		fill(255);
		stroke(255);
		strokeWeight(0);
		ellipse(this.position.x, this.position.y, 10, 10);
	}

	/**
	 * @returns This point's x position.
	 */
	this.getX = function() {
		return this.position.x;
	}

	/**
	 * @returns This point's y position.
	 */
	this.getY = function() {
		return this.position.y;
	}

}

/**
 * Draws all of the points stored in the array.
 * 
 * @returns void
 */
function drawPoints() {
	for (let i = 0; i < points.length; i++) {
		points[i].drawPoint();
	}
}