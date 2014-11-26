function start() {
	setInterval(boxSize, 1);
	
	var text =  "Dette er Spillstatistikk siden. Her kan du sjekke felles spillstatistikk for alle spillets brukere."
				+ "<br /><br /><div onclick='statsOverview()' class='link'>Neste</div>";
	
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

function statsOverview() {
	document.getElementById("main").style.zIndex = "10";
	var text = "Dette er her all infoen står. Her ser du alt fra antall registrerte spillere til spillets rikeste spiller."
				+ "<br />La oss ta en nærmere titt!"
				+ "<br /><br /><div onclick='online()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function online() {
	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("usersOnline").style.zIndex = "14";
	
	var text = "Her ser du hvor mange spillere og hvilke spilllere som er pålogget. Spillernes navn har forskjellige"
				+ " fargekoder som sier noe om spilleren. Grønn tekst vil si at det er en vanlig spiller,"
				+ " hvit tekst vil si at det er en administrator og rød tekst vil si at det er en firmaeier."
				+ "<br /><br /><div onclick='last()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function last() {
	document.getElementById("usersOnline").style.zIndex = "11";
	document.getElementById("left").style.zIndex = "14";
	
	var text = "Her ser du de 10 siste registrerte spillerne i spillet, med den nyeste øverst."
				+ "<br /><br /><div onclick='richest()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function richest() {
	document.getElementById("left").style.zIndex = "11";
	document.getElementById("middle").style.zIndex = "14";
	
	var text = "Her er en oversikt over de 10 rikeste personene i spillet. Gjør jobber så kommer kanskje du på denne lista en gang!"
				+ "<br /><br /><div onclick='rank()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function rank() {
	document.getElementById("middle").style.zIndex = "11";
	document.getElementById("right").style.zIndex = "14";
	
	var text = "Dette er oversikten over de 10 personene i spillet som har høyest rank. Det er da de med mest erfaringspoeng som kommer på denne lista."
				+ "<br /><br /><div onclick='topBar()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function topBar() {
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("textBox").innerHTML = "Da har vi sett på Spillstatistikk. La oss trykke på Minispill og sjekke ut hva dette er!";
}