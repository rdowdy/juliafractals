var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

g_canvasMap = mapCanvas();
/////////////////////////////
// Canvas Stuff
/////////////////////////////
function  getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}

// canvas mousemove handler
canvas.onmousemove = function(e) {
	var position = getMousePos(canvas, e);
	drawAt("rgba(255, 0, 0, 1.0)", position.x, position.y);
}

// draws a single rgba pixel at (x, y)
function drawAt(rgba, x, y) {
	context.fillStyle = rgba;
	context.fillRect(x, y, 1, 1);
}

/////////////////////////////
// Fractal Stuff
/////////////////////////////
// f(z) = z^2 - 0.221 - 0.713i
function julia() {
	

}

// map the canvas to complex numbers
// the top left is (-1, 1) and the bottom right is (1, -1)
function mapCanvas() {
	var canvasMap = [];

	var xStep = 2 / (canvas.width - 1); 
	var yStep = 2 / (canvas.height - 1);
	var real, imaginary;
	for(var y = 0; y < canvas.height; y++) {
		canvasMap[y] = [];

		// set imaginary component for this row
		// should be in [-1, 1]
		imaginary = math.round(1 - (yStep * y), 5);
		for(var x = 0; x < canvas.width; x++) {
			// set real component for this column
			// should be in [-1, 1]
			real = math.round(-1 + (xStep * x), 5);
			canvasMap[y][x] = {
				real: real,
				imaginary: imaginary
			}
		}
	}

	console.log("done");
	return canvasMap;
}