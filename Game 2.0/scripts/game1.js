var canvas = document.getElementById("ramme");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.jpg";

var goalReady = false;
var goalImage = new Image();
goalImage.onload = function () {
	goalReady = true;
};
goalImage.src = "images/goal.png";

var ballReady = false;
var ballImage = new Image();
ballImage.onload = function () {
	ballReady = true;
};
ballImage.src = "images/fotball.png";

var goal = {
	speed: 400,
	x: canvas.width / 2,
	y: canvas.height - 100,
	height: goalImage.height,
	width: goalImage.width
};

var ball = {
	speed: 256,
	x: 0,
	y: 0,
	height: ballImage.height,
	width: ballImage.width
};

var points = 0;

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var gameOver = function () {
	goal.x = canvas.width / 2;
	
	ball.x = Math.random() * canvas.width;
	ball.y = -33;
};

var update = function(modifier) {
	if(37 in keysDown) {
		goal.x -= goal.speed * modifier;
	}
	if(39 in keysDown) {
		goal.x += goal.speed * modifier;
	}
	
	ball.y += ball.speed * modifier;
	
	if((ball.y - ball.height) >= 500) {
		var maxL = goal.x;
		var maxR = maxL + goal.width;
		var dotL = ball.x;
		var dotR = dotL + ball.width;
		if(dotR > maxL && dotL < maxR) {
			points += 10;
			ball.height = -33;
		}
		else {
			gameOver();
		}
	}
};

var updatePoints = function () {
	var tekst = "00000";
	switch(points.toString().length) {
		case 1:		tekst = "0000" + points;
					break;
		case 2:		tekst = "000" + points;
					break;
		case 3:		tekst = "00" + points;
					break;
		case 4:		tekst = "0" + points;
					break;
		default:	tekst = points;
	}
	ctx.font = "30px 'Black Ops One'";
	ctx.fillStyle = "white";
	ctx.fillText(tekst, 175, 50);
};

var draw = function() {
	if(bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
	
	if(goalReady) {
		ctx.drawImage(goalImage, goal.x, goal.y);
	}
	
	if(ballReady) {
		ctx.drawImage(ballImage, ball.x, ball.y);
	}
	
	updatePoints();
};

var main = function () {
	var now = Date.now();
	var dif = now - then;
	
	update(dif / 1000);
	draw();
	
	then = now;
	
	requestAnimationFrame(main);
};

requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;

var then = Date.now();
main();
