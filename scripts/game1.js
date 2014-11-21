var run = false;
var speed = true;
var text = {
	line1: "",
	line2: "",
	line3: ""
};

var mousePosition = {
	x: 0,
	y: 0
};

var canvas = document.getElementById("ramme");
var ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 450;

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
ballImage.src = "images/football.png";

var goal = {
	speed: 400,
	height: 72,
	width: 128,
	x: 0,
	y: canvas.height - 72
};

var ball = {
	speed: 256,
	x: 0,
	y: 0,
	height: 33,
	width: 33
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
	resetGoal();
	resetBall();
	document.getElementById("knapp").style.visibility = "visible";
	text.line1 = "GAME OVER!";
	text.line3 = "Score: " + points;
	text.line2 = "";
	document.getElementById("knapp").innerHTML = "Try again!";
	run = false;
	goal.speed = 400;
	ball.speed = 256;
};

var startSpill = function () {
	resetGoal();
	resetBall();
	text.line1 = "Goalscorer!";
	text.line2 = "Control the goal";
	text.line3 = "and catch the ball!";
};

var resetGoal = function () {
	goal.x = ((canvas.width / 2) - (goal.width / 2));
};

var resetBall = function () {
	ball.x = 2 + (Math.random() * (canvas.width - ball.width - 4));
	ball.y = -ball.height;
};

var update = function(modifier) {
	if(run) {
		if(37 in keysDown) {
			if(goal.x > 0) {
				goal.x -= goal.speed * modifier;
			}
		}
		if(39 in keysDown) {
			if((goal.x + goal.width) < canvas.width) {
				goal.x += goal.speed * modifier;
			}
		}

		if(speed && points != 0 && points % 100 == 0) {
			ball.speed += 100;
			goal.speed += 100;
			speed = false;
		}
		
		if(points % 100 != 0) {
			speed = true;
		}

		ball.y += ball.speed * modifier;

		if((ball.y + ball.height) >= canvas.height) {
			if(ball.x >= goal.x && (ball.x + ball.width) <= (goal.x + goal.width)) {
				points += 10;
				resetBall();
			}
			else {
				gameOver();
			}
		}
	}
	else {
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
	ctx.fillStyle = "rgba(160, 160, 160, 0.2)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "rgba(0, 153, 0, 0.7)";
	ctx.strokeStyle = "rgba(0, 153, 0, 0.7)";
	ctx.lineJoin = "round";
	ctx.lineWidth = 20;
	ctx.strokeRect(195, 80, 400, 300);
	ctx.fillRect(205, 90, 380, 280);
	
	ctx.font = "50px 'Black Ops One'";
	ctx.textAlign = "center";
	ctx.fillStyle = "white";
	ctx.fillText(text.line1, canvas.width / 2, 150);

	ctx.font = "30px 'Black Ops One'";
	ctx.fillText(text.line2, canvas.width / 2, 200);
	
	ctx.font = "30px 'Black Ops One'";
	ctx.fillText(text.line3, canvas.width / 2, 250);
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

startSpill();
var then = Date.now();
main();
