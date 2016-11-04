var canvas = document.getElementById("canvas");
var width = canvas.width;
var height = canvas.height;

canvas.onmousemove = function(e) {
	console.log("x: " + e.layerX);
	console.log("y: " + e.layerY / height);
}