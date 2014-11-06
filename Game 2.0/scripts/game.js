var Game = {};

Game.fps = 50;

Game.initialize = function() {
	this.balls = [];
	this.ctx = document.getElementById("ramme").getContext("2d");
}

Game.draw = function() {
	this.ctx.clearRect(0, 0, 800, 500);
}

Game.update = function() {

}

game.run = function() {
	Game.draw();
	Game.update();
}