function start() {
	setInterval(boxSize, 1);
	
	document.getElementById("main").style.zIndex = "1";
	var text = "Dette er minispillet <strong>Goalscorer</strong>! Poenget med spillet er å fange så mange baller som mulig med målet."
				+ " Du bruker piltastene for å styre.<br>Trykk <strong>Neste</strong> når du er klar!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").innerHTML = "&#8592; Forrige";
	document.getElementById("neste").onclick = function() {game();};
	document.getElementById("forrige").onclick = function() {window.location.replace("minispill.html");};
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	gray.style.height = document.body.scrollHeight + "px";
	
	gray.style.width = "0";
	gray.style.width = document.body.scrollWidth + "px";
}

function game() {
	document.getElementById("neste").style.visibility = "visible";
	document.getElementById("topbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Trykk <strong>Neste</strong> når du har spilt ferdig!";
	document.getElementById("forrige").innerHTML = "&#8592; Forrige";
	document.getElementById("neste").onclick = function() {done();};
	document.getElementById("forrige").onclick = function() {start();};
}

function done() {
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	var text = "Da var tutorialen ferdig! Du har nå vært igjennom alle spillets funksjoner,"
				+ " og skal nå kunne spille spillet på egenhånd. Hvis du ikke vil gå tilbake og dobbeltsjekke noe,"
				+ " så er det bare å trykke på <q>Logg ut</q> så skal du få lage din egen bruker!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {game();};
}