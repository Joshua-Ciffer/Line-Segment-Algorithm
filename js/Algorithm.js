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
	var previousX, previousY, currentX, currentY;
	var startX, startY, endX, endY;
	if (points.length > 0) {
		if (points.length === 1) {
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
				if (!(startX == endX) && !(startY == endY)) {	// Fixes bug where a line would be drawn from a point to itself.
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
	}
}

/**
 * Draws all of the line segments that have been created.
 * 
 * @returns void
 */
function drawLines() {
	let startX, startY, endX, endY;
	for (let i = 0; i < lines.length; i++) {
		startX = lines[i][0];
		startY = lines[i][1];
		endX = lines[i][2];
		endY = lines[i][3];
		if ((startX != undefined) && (startY != undefined) && (endX != undefined) && (endY != undefined)) {
			stroke(255, 0, 0);
			strokeWeight(3);
			line(startX, startY, endX, endY);
		}
	}
}