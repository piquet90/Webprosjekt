function start() {
	setInterval(boxSize, 1);
	
	document.getElementById("main").style.zIndex = "1";
	var text =  "Dette er Minispill siden. Her finner du minispill du kan spille mens du venter på at jobber skal bli ferdig!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").innerHTML = "&#8592; Forrige";
	document.getElementById("neste").onclick = function() {overview();};
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

function overview() {
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("neste").style.visibility = "visible";
	document.getElementById("startGame").onclick = function() {};
	document.getElementById("main").style.zIndex = "10";
	var text = "Her kan du velge hva du har lyst til å spille. Som du ser har vi kun et spill tilgjengelig nå,"
				+ " men det vil komme flere i fremtiden!";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").innerHTML = "&#8592; Forrige";
	document.getElementById("neste").onclick = function() {choose();};
	document.getElementById("forrige").onclick = function() {start();};
}

function choose() {
	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("game1").style.zIndex = "14";

	document.getElementById("text").innerHTML = "La oss prøve ut <strong>FOBBALSPILLET</strong>! Trykk på <q>Trykk her for å spille</q> .";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {overview();};
	document.getElementById("startGame").onclick = function() {window.location.replace("fobballspillet.html");};
}