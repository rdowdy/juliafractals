var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

// f(z) = z^2 - 0.221 - 0.713i
var fn = math.complex({re: -0.221, im: -0.713});

julia(canvas);
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

// draws a single rgba pixel at (x, y)
function drawAt(rgba, x, y) {
	context.fillStyle = rgba;
	context.fillRect(x, y, 1, 1);
}

/////////////////////////////
// Fractal Stuff
/////////////////////////////
function julia(canvas) {
	var xStep = 2 / (canvas.width - 1); 
	var yStep = 2 / (canvas.height - 1);
	var real, imaginary;

	var cutoff = 256;
	var z, count;

	for(var y = 0; y < canvas.height; y++) {
		// set imaginary component for this row; should be in [-1, 1]
		imaginary = 1 - (yStep * y);

		for(var x = 0; x < canvas.width; x++) {
			// set real component for this column; should be in [-1, 1]
			real = -1 + (xStep * x);
			z = math.complex({re: real, im: imaginary});

			cutoff = 256;
			count = 0;
			while(count < cutoff && math.abs(z) < 2) {
				z = calcFn(z);
				count++;
			}

			if(count > 0) {
				drawAt("rgba(" + count + ",0,0,1.0)", x, y);
			}
		}
	}
}
function calcFn(z) {
	var zSquared = math.square(z);
	return math.add(zSquared, fn);
}