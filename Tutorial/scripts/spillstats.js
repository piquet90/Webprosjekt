var mainH;

function start() {
	setInterval(boxSize, 1);
	
	document.getElementById("main").style.zIndex = "1";
	var text =  "Dette er Spillstatistikk siden. Her kan du sjekke felles spillstatistikk for alle spillets brukere."
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").innerHTML = "Forrige side";
	document.getElementById("neste").onclick = function() {statsOverview();};
	document.getElementById("forrige").onclick = function() {window.location.replace("hardware.html");};
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
	mainH = document.getElementById("main").scrollHeight;
}

function statsOverview() {
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("usersOnline").style.zIndex = "11";
	
	document.getElementById("main").style.zIndex = "10";
	var text = "Dette er her all infoen står. Her ser du alt fra antall registrerte spillere til spillets rikeste spiller."
				+ "<br />La oss ta en nærmere titt!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").innerHTML = "Forrige";
	document.getElementById("neste").onclick = function() {online();};
	document.getElementById("forrige").onclick = function() {start();};
}

function online() {
	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("usersOnline").style.zIndex = "14";
	document.getElementById("left").style.zIndex = "11";
	
	var text = "Her ser du hvor mange spillere og hvilke spilllere som er pålogget. Spillernes navn har forskjellige"
				+ " fargekoder som sier noe om spilleren. Grønn tekst vil si at det er en vanlig spiller,"
				+ " hvit tekst vil si at det er en administrator og rød tekst vil si at det er en firmaeier.";
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
	document.getElementById("middle").style.zIndex = "11";
	document.getElementById("right").style.zIndex = "14";
	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("main").style.zIndex = "10";
	document.getElementById("topbar").style.zIndex = "1";
	document.getElementById("neste").style.visibility = "visible"

	document.getElementById("text").innerHTML = "Dette er oversikten over de 10 personene i spillet som har høyest rank. Det er da de med mest erfaringspoeng som kommer på denne lista.";
	document.getElementById("forrige").onclick = function() {richest();};
	document.getElementById("neste").onclick = function() {topBar();};
	document.getElementById("main").scrollTop = mainH;
}

function topBar() {
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Da har vi sett på Spillstatistikk. La oss trykke på Minispill og sjekke ut hva dette er!";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {rank();};
}