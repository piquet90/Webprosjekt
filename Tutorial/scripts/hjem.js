function start() {
	var forrige = document.getElementById("forrige");

	setInterval(boxSize, 1);
	
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("text").innerHTML = "<strong>Da har vi logget inn!</strong><br />Dette er spillets hovedside. Her ville det komme oppdateringer angående spillet og annen nyttig info.";
	forrige.innerHTML = "&#8592; Forrige side";
	forrige.onclick = function() {window.location.replace("index.html");};
	document.getElementById("neste").onclick = function() {navBar();};
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	var height = Math.max(
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
        Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
        Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    );
	gray.style.height = height + "px";
	
	gray.style.width = "0";
	var width = Math.max(
        Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        Math.max(document.body.offsetWidth, document.documentElement.offsetWidth),
        Math.max(document.body.clientWidth, document.documentElement.clientWidth)
    );
	gray.style.width = width + "px";
}

function navBar() {
	var forrige = document.getElementById("forrige");

	document.getElementById("topbar").style.zIndex = "1";
	document.getElementById("neste").style.visibility = "visible";
	document.getElementById("navbar").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Dette er navigasjonsbaren din. Her står all info om deg.";
	forrige.style.visibility = "visible";
	forrige.innerHTML = "&#8592; Forrige";
	forrige.onclick = function() {start();};
	document.getElementById("neste").onclick = function() {topBar();};
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	var text = "Dette er hovedmenyen. Det er her du navigerer deg gjennom alle ting du kan gjøre i spillet."
				+ "<br />La oss trykke på <strong>Jobber</strong> og sjekke ut denne funksjonen!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {navBar();};
}