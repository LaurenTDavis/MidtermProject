var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d");


var ballRadius = 10; 

var sliderHeight = 20;
var sliderWidth = 85;
var sliderBuild = (canvas.width - sliderWidth) / 2;

var x = canvas.width / 2;
var y = canvas.height - 30; 
var dx = 2;
var dy = -2;

var left = false; 
var right = false; 

document.addEventListener("keydown", moveSlider, false);
document.addEventListener("keyup", stopSlider, false);

function moveSlider(e) {
	if (e.keyCode === 37) {
		left = true; 
	}
	else if (e.keyCode === 39) {
		right = true; 
	}

}

function stopSlider(e) {
	if (e.keyCode === 37) {
		left = false; 
	}
	else if (e.keyCode === 39) {
		right = false; 
	}

}

function ball() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle="red";
	ctx.fill();
	ctx.closePath();
}

function slider() {
	ctx.beginPath();
	ctx.rect(sliderBuild, canvas.height-sliderHeight, sliderWidth, sliderHeight);
	ctx.fillStyle = "pink";
	ctx.fill();
	ctx.closePath();

}

function show() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball();
	slider();

	// Move the ball 
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	
	// Game Over 
	if (y + dy < ballRadius) {
		dy = -dy;
	}

	else if (y + dy > canvas.height - ballRadius) {
		if (x > sliderBuild && x < sliderBuild + sliderWidth) {
			dy = -dy;
		}
	}



	// Move slider position  
	if (right && sliderBuild < canvas.width - sliderWidth) {
		sliderBuild += 7;
	}
	else if (left && sliderBuild > 0) {
		sliderBuild -= 7;
	}

	x += dx;
	y += dy;

}
setInterval(show, 5); 