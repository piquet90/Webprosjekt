function start() {
	setInterval(boxSize, 1);
	
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("text").innerHTML = "Da har vi logget inn!<br />Dette er spillets hovedside. Her ville det komme oppdateringer angående spillet og annen nyttig info.";
	document.getElementById("forrige").innerHTML = "Forrige side";
	document.getElementById("neste").onclick = function() {navBar();};
	document.getElementById("forrige").onclick = function() {window.location.replace("index.html");};
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	gray.style.height = document.body.scrollHeight + "px";
	
	gray.style.width = "0";
	gray.style.width = document.body.scrollWidth + "px";
}

function navBar() {
	document.getElementById("topbar").style.zIndex = "1";
	document.getElementById("neste").style.visibility = "visible";
	document.getElementById("navbar").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Dette er navigasjonsbaren din. Her står all info om deg.";
	document.getElementById("forrige").style.visibility = "visible";
	document.getElementById("forrige").innerHTML = "Forrige";
	document.getElementById("forrige").onclick = function() {start();};
	document.getElementById("neste").onclick = function() {topBar();};
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	var text = "Dette er hovedmenyen. Det er her du navigerer deg gjennom alle ting du kan gjøre i spillet."
				+ "<br /><br />La oss trykke på Jobber og sjekke ut denne funksjonen!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {navBar();};
}