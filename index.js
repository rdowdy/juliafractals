var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

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
	console.log(position);
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