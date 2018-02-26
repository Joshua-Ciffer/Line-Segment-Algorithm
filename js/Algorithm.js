/**
 * This file contains functions that determine which points are close enough together to be considered a part of the same line.
 * 
 * @author Joshua Ciffer
 * @version 02/22/2018
 */

/**
 * Array containing all of the line segments that have been constructed.
 */
var lines = [];

/**
 * Iterator used when adding line segments to the array.
 */
var numLines = 0;

/**
 * Evaluates what points are close enough together to be considered a part of the same line segment as the previous point.
 * 
 * @returns void
 */
function constructLineSegments() {
	let previousX, previousY, currentX, currentY;
	let startX, startY, endX, endY;
	if (!(points[0] == undefined)) {
		startX = points[0].getX();
		startY = points[0].getY();
	}
	for (let i = 1; i < points.length; i++) {

		previousX = points[i - 1].getX();
		previousY = points[i - 1].getY();
		currentX = points[i].getX();
		currentY = points[i].getY();
		if (dist(currentX, currentY, previousX, previousY) > 25) {
			endX = previousX;
			endY = previousY;
			lines[numLines] = [];
			lines[numLines][0] = startX;
			lines[numLines][1] = startY;
			lines[numLines][2] = endX;
			lines[numLines][3] = endY;
			numLines++;
			startX = currentX;
			startY = currentY;
		}
	}
}

/**
 * Draws all of the line segments that have been created.
 * 
 * @returns void
 */
function drawLines() {
	for (let i = 0; i < lines.length; i++) {
		for (let j = 0; j < lines[i].length; j++) {
			let startX = lines[i][0];
			let startY = lines[i][1];
			let endX = lines[i][2];
			let endY = lines[i][3];
			stroke(255, 0, 0);
			strokeWeight(5);
			line(startX, startY, endX, endY);
		}
}
}