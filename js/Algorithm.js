/**
 * 
 * @author Joshua Ciffer
 * @version 02/16/2018
 */
var lines = [];
var numLines = 0;

function constructLineSegments(points) {
	let startX;
	let startY;
	let endX;
	let endY;
	startX = points[0].getX();
	startY = points[0].getY();
	for (let i = 1; i < points.length; i++) {
		let previousX = points[i - 1].getX();
		let previousY = points[i - 1].getY();
		let currentX = points[i].getX();
		let currentY = points[i].getY();
		if (dist(currentX, currentY, previousX, previousY) > 20) {
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