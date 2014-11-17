var run = true;

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
	run = false;
};

var resetBall = function () {
	ball.x = Math.random() * canvas.width;
	ball.y = -33;
}

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
		if(32 in keysDown) {
			start();
		}
	}
};

var start = function () {
	points = 0;
	run = true;	
}

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
	ctx.fillText(tekst, 650, 50);
};

var draw = function() {
	if(run) {
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
	}
	else {
		
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
