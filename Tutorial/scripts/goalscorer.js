function start() {
	var forrige = document.getElementById("forrige");

	setInterval(boxSize, 1);
	
	document.getElementById("main").style.zIndex = "1";
	var text = "Dette er minispillet <strong>Goalscorer</strong>! Poenget med spillet er å fange så mange baller som mulig med målet."
				+ " Du bruker piltastene for å styre.<br>Trykk <strong>Neste</strong> når du er klar!";
	document.getElementById("text").innerHTML = text;
	forrige.innerHTML = "&#8592; Forrige side";
	forrige.onclick = function() {window.location.replace("minispill.html");};
	document.getElementById("neste").onclick = function() {game();};
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

function game() {
	var forrige = document.getElementById("forrige");
	var neste = document.getElementById("neste");

	document.getElementById("topbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Trykk <strong>Neste</strong> når du har spilt ferdig!";
	forrige.innerHTML = "&#8592; Forrige";
	forrige.onclick = function() {start();};
	neste.style.visibility = "visible";
	neste.onclick = function() {done();};
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