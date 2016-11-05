var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;


// canvas mousemove handler
canvas.onmousemove = function(e) {
	//console.log("x: " + e.layerX);
	//console.log("y: " + e.layerY / height);
	drawAt('rgba(255,0,0,1.0)', e.layerX, e.layerY);
}

// draws a single rgba pixel at (x, y)
function drawAt(rgba, x, y) {
	console.log("drawing: " + rgba + " at (" + x + "," + y + ")");
	context.fillStyle = rgba;
	context.fillRect(x, y, 1, 1);
}

