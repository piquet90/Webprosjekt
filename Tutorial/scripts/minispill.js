function start() {
	setInterval(boxSize, 1);
	
	var text =  "Dette er Spillstatistikk siden. Her kan du sjekke felles spillstatistikk for alle spillets brukere."
				+ "<br /><br /><div onclick='game()' class='link'>Neste</div>";
	
	document.getElementById("textBox").innerHTML = text;
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	gray.style.height = document.body.scrollHeight + "px";
	
	gray.style.width = "0";
	gray.style.width = document.body.scrollWidth + "px";
	
	var grayMain = document.getElementById("grayMain");
	grayMain.style.height = "0";
	grayMain.style.height = document.getElementById("main").scrollHeight + "px";
}

function game() {
	
}