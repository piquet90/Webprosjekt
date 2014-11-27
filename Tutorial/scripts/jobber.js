var sekunder = [];
var interval = [];

function tell(navn, s) {
	var sek = s;
	sekunder[navn] = parseInt(sek, 10);
	update(navn);
	interval[navn] = window.setInterval(function() {update(navn);}, 1000);
}

function update(id) {
	sekunder[id]--;
	var sek = sekunder[id];
	var timer = sek / 3600;
	var min = (sek % 3600) / 60;
	var restSek = (sek % 3600) % 60;
	timer = Math.floor(timer);
	min = Math.floor(min);
	restSek = Math.floor(restSek);
	document.getElementById(id).innerHTML = ("0" + timer).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + restSek).slice(-2);
	if(sek == 0) {
		document.getElementById(id).innerHTML = "00:00:00";
		clearInterval(interval[id]);
		reward();
	}
}

function start() {
	setInterval(boxSize, 1);
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("text").innerHTML = "Dette er Jobber siden. Her utfører du jobber for å tjene penger og erfarinsgpoeng!";
	document.getElementById("forrige").innerHTML = "Forrige side";
	document.getElementById("neste").onclick = function() {jobOverview();};
	document.getElementById("forrige").onclick = function() {window.location.replace("hjem.html");};
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

function jobOverview() {
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("neste").style.visibility = "visible";
	document.getElementById("simple").onclick = function() {};
	document.getElementById("main").style.zIndex = "10";
	var text = "Det er her du velger jobber. Som du ser trenger du bedre hardware for å gjøre jobber man tjener mer på."
				+ " Men jo vanskeligere jobb, jo større cooldown. Denne blir mindre jo bedre hardware man har.";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").innerHTML = "Forrige";
	document.getElementById("neste").onclick = function() {doJob();};
	document.getElementById("forrige").onclick = function() {start();};
}

function doJob() {
	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "10";
	document.getElementById("jobTxt").style.zIndex = "14";
	document.getElementById("jobButton").style.zIndex = "14";
	document.getElementById("simple").style.zIndex = "14";
	document.getElementById("cash").innerHTML = "$1500";
	document.getElementById("xp").innerHTML = "1000 xp";
	document.getElementById("simple").onclick = function() {countDown();};
	document.getElementById("text").innerHTML = "Prøv å trykke på Simple Job!";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {jobOverview();};
}

function countDown() {
	document.getElementById("forrige").style.visibility = "hidden";
	tell("simple", 10);
	document.getElementById("text").innerHTML += "<br /><br />Vi har satt opp hardware levelen din, så jobben vil nå bare ta 10 sekunder.";
	document.getElementById("simple").onclick = function() {};
}

function reward() {
	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("simple").innerHTML = "Simple Job";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("navbar").style.zIndex = "10";
	document.getElementById("cash").innerHTML = "$1600";
	document.getElementById("xp").innerHTML = "1050 xp";
	var text = "Jobben er nå ferdig. Hvis du er observang ser du at du nå har tjent 100$ og 50 xp."
				+ " Vi skal se hva dette kan brukes til senere.";
	document.getElementById("text").innerHTML = text;
	document.getElementById("neste").style.visibility = "visible";
	document.getElementById("forrige").style.visibility = "visible";
	document.getElementById("neste").onclick = function() {topBar();};
	document.getElementById("forrige").onclick = function() {doJob();};
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Da har vi sett på Jobber. La oss trykke på Hardware og sjekke ut hva dette er!";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {reward();};
}