function start() {
	var forrige = document.getElementById("forrige");

	setInterval(boxSize, 1);
	
	document.getElementById("main").style.zIndex = "1";
	var text =  "Dette er <strong>Hardware</strong>-siden. Her kjøper du nytt utstyr som gjør at du kan gjøre vanskeligere jobber,"
				+ " og senker cooldown på jobber.";
	document.getElementById("text").innerHTML = text;
	forrige.innerHTML = "&#8592; Forrige side";
	document.getElementById("neste").onclick = function() {hwOverview();};
	forrige.onclick = function() {window.location.replace("jobber.html");};
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
}

function hwOverview() {
	var forrige = document.getElementById("forrige");
	var neste = document.getElementById("neste");
	
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("kjop").onclick = function() {};
	document.getElementById("main").style.zIndex = "10";
	var text = "Det er her du kjøper hardware. Som du ser er koster PC-utstyret mer jo bedre det er."
				+  " IBM 4Kilo er standard PC'en som alle starter med.<br /><strong>Det vil da også si deg!</strong>";
	document.getElementById("text").innerHTML = text;
	neste.style.visibility = "visible";
	neste.onclick = function() {kjop();};
	forrige.innerHTML = "&#8592; Forrige";
	forrige.onclick = function() {start();};
}

function kjop() {
	var buy = document.getElementById("kjop");

	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("asia").style.zIndex = "14";
	buy.disabled = false;
	buy.value = "Kjøp";
	buy.onclick = function() {reward();};
	document.getElementById("cash").innerHTML = "$1600";
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Du har nok penger til å kjøpe <strong>Asia LAPTOP FLEXI</strong>. Trykk på <strong>Kjøp</strong>-knappen under denne PC'en!";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {hwOverview();};
}

function reward() {
	var buy = document.getElementById("kjop");
	var neste = document.getElementById("neste");

	document.getElementById("topbar").style.zIndex = "1";
	document.getElementById("grayMain").style.visibility = "hidden";
	buy.disabled = true;
	buy.value = "Du eier denne";
	document.getElementById("cash").innerHTML = "$100";
	document.getElementById("navbar").style.zIndex = "10";
	document.getElementById("main").style.zIndex = "1";
	var text = "Gratulerer! Du har akkurat kjøpt din første PC! Jobber du gjør vil nå gå 10% raskere!"
	+ " Utstyr er selvfølgelig ikke gratis, og denne gangen kostet det deg $1500.";
	document.getElementById("text").innerHTML = text;
	neste.style.visibility = "visible";
	neste.onclick = function() {topBar();};
	document.getElementById("forrige").onclick = function() {kjop();};
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Da har vi sett på <strong>Hardware</strong>. La oss trykke på <strong>Spillstatistikk</strong> og sjekke ut hva dette er!";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {reward();};
}