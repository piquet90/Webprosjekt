function start() {
	setInterval(boxSize, 1);
	
	var text =  "Dette er Minispill siden. Her finner du minispill du kan spille mens du venter på at jobber skal bli ferdig!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").innerHTML = "Forrige side";
	document.getElementById("neste").onclick = function() {statsOverview();};
	document.getElementById("forrige").onclick = function() {window.location.replace("spillstats.html");};
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