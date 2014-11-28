var mainH;

function start() {
	var forrige = document.getElementById("forrige");

	setInterval(boxSize, 1);
	
	document.getElementById("main").style.zIndex = "1";
	var text =  "Dette er <strong>Spillstatistikk</strong>-siden. Her kan du sjekke felles spillstatistikk for alle spillets brukere."
	document.getElementById("text").innerHTML = text;
	forrige.innerHTML = "&#8592; Forrige side";
	forrige.onclick = function() {window.location.replace("hardware.html");};
	document.getElementById("neste").onclick = function() {statsOverview();};
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	gray.style.height = document.body.scrollHeight + "px";
	
	gray.style.width = "0";
	gray.style.width = document.body.scrollWidth + "px";
	
	var grayMain = document.getElementById("grayMain");
	var main = document.getElementById("main");
	grayMain.style.height = "0";
	grayMain.style.height = main.scrollHeight + "px";
	mainH = document.getElementById("main").scrollHeight;
}

function statsOverview() {
	var forrige = document.getElementById("forrige");

	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("usersOnline").style.zIndex = "11";
	
	document.getElementById("main").style.zIndex = "10";
	var text = "Her kan du se antall registrerte spillere, spillets rikeste spillere påloggede spiller med mer."
				+ "<br />La oss ta en nærmere titt!";
	document.getElementById("text").innerHTML = text;
	forrige.innerHTML = "&#8592; Forrige";
	forrige.onclick = function() {start();};
	document.getElementById("neste").onclick = function() {online();};
}

function online() {
	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("usersOnline").style.zIndex = "14";
	document.getElementById("left").style.zIndex = "11";
	
	var text = "Her ser du hvor mange spillere og hvilke spillere som er pålogget. Spillernes navn har forskjellige"
				+ " fargekoder som sier noe om spilleren. <strong>Grønn</strong> tekst vil si at det er en vanlig spiller,"
				+ " <strong>hvit</strong> tekst vil si at det er en administrator og <strong>rød</strong> tekst vil si at det er en firmaeier.";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").onclick = function() {statsOverview();};
	document.getElementById("neste").onclick = function() {last();};
	document.getElementById("main").scrollTop = 0;
}

function last() {
	document.getElementById("usersOnline").style.zIndex = "11";
	document.getElementById("left").style.zIndex = "14";
	document.getElementById("middle").style.zIndex = "11";

	document.getElementById("text").innerHTML = "Her ser du de 10 siste registrerte spillerne i spillet, med den nyeste øverst.";
	document.getElementById("forrige").onclick = function() {online();};
	document.getElementById("neste").onclick = function() {richest();};
	document.getElementById("main").scrollTop = mainH;
}

function richest() {
	document.getElementById("left").style.zIndex = "11";
	document.getElementById("middle").style.zIndex = "14";
	document.getElementById("right").style.zIndex = "11";

	document.getElementById("text").innerHTML = "Her er en oversikt over de 10 rikeste personene i spillet. Gjør jobber så kommer kanskje du på denne lista en gang!";
	document.getElementById("forrige").onclick = function() {last();};
	document.getElementById("neste").onclick = function() {rank();};
	document.getElementById("main").scrollTop = mainH;
}

function rank() {
	var neste = document.getElementById("neste");

	document.getElementById("middle").style.zIndex = "11";
	document.getElementById("right").style.zIndex = "14";
	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("main").style.zIndex = "10";
	document.getElementById("topbar").style.zIndex = "1";
	neste.style.visibility = "visible"
	neste.onclick = function() {topBar();};

	document.getElementById("text").innerHTML = "Dette er oversikten over de 10 personene i spillet som har høyest rank. Det er da de med mest erfaringspoeng som kommer på denne lista.";
	document.getElementById("forrige").onclick = function() {richest();};
	document.getElementById("main").scrollTop = mainH;
}

function topBar() {
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Da har vi sett på <strong>Spillstatistikk</strong>. La oss trykke på <strong>Minispill</strong> og sjekke ut hva dette er!";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {rank();};
}