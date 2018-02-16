/**
 * This file contains a constructor function that creates a point object.  The point object contains a vector with an x and y value
 * that are passed as a parameter from mousePressed() in Sketch.js
 * 
 * @author Joshua Ciffer
 * @version 02/16/2018
 */
function Point(position) {
	
	this.position = position;
	
	this.drawPoint = function() {
		fill(255);
		stroke(255);
		strokeWeight(0);
		ellipse(this.position.x, this.position.y, 10, 10);
	}
	
	this.getX = function() {
		return this.position.x;
	}
	
	this.getY = function() {
		return this.position.y;
	}
	
}