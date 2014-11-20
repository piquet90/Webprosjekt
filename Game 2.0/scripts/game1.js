var run = true;
var text = {
	line1: "",
	line2: ""
};

var mousePosition = {
	x: 0,
	y: 0
};

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
	height: goalImage.clientHeight,
	width: goalImage.clientWidth
};

var ball = {
	speed: 256,
	x: 0,
	y: 0,
	height: ballImage.clientHeight,
	width: ballImage.clientWidth
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
	resetBall();
	document.getElementById("knapp").style.visibility = "visible";
	run = false;
};

var resetBall = function () {
	ball.x = Math.random() * canvas.width;
	ball.y = -33;
};

var update = function(modifier) {
	if(run) {
		if(37 in keysDown) {
			goal.x -= goal.speed * modifier;
		}
		if(39 in keysDown) {
			goal.x += goal.speed * modifier;
		}
	
		ball.y += ball.speed * modifier;
	
		if((ball.y - 33) >= 500) {
			if(ball.x >= goal.x && (ball.x + 33) <= (goal.x + 128)) {
				points += 10;
				resetBall();
			}
			else {
				gameOver();
			}
		}
	}
	else {
		text.line1 = "GAME OVER!";
		text.line2 = "Score: " + points;
		
		if(32 in keysDown) {
			start();
		}
	}
};

var start = function () {
	points = 0;
	document.getElementById("knapp").style.visibility = "hidden";
	run = true;	
};

var updatePoints = function () {
	var score = "00000";
	switch(points.toString().length) {
		case 1:		score = "0000" + points;
					break;
		case 2:		score = "000" + points;
					break;
		case 3:		score = "00" + points;
					break;
		case 4:		score = "0" + points;
					break;
		default:	score = points;
	}
	ctx.font = "30px 'Black Ops One'";
	ctx.fillStyle = "white";
	ctx.fillText(score, 650, 50);
};

var updateText = function () {
	ctx.font = "50px 'Black Ops One'";
	ctx.textAlign = "center";
	ctx.fillStyle = "white";
	ctx.fillText(text.line1, canvas.width / 2, 150);
	
	ctx.font = "30px 'Black Ops One'";
	ctx.fillText(text.line2, canvas.width / 2, 200);
};

var draw = function() {
		if(bgReady) {
			ctx.drawImage(bgImage, 0, 0);
		}
		
		if(ballReady) {
			ctx.drawImage(ballImage, ball.x, ball.y);
		}
	
		if(goalReady) {
			ctx.drawImage(goalImage, goal.x, goal.y);
		}
	
		updatePoints();
		
		if(!run) {
			updateText();
		}
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
