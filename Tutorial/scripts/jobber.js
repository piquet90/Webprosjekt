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
	var forrige = document.getElementById("forrige");

	setInterval(boxSize, 1);
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("text").innerHTML = "Dette er <strong>Jobber</strong>-siden. Her utfører du jobber for å tjene penger og erfaringsgpoeng!";
	document.getElementById("neste").onclick = function() {jobOverview();};
	forrige.innerHTML = "&#8592; Forrige side";
	forrige.onclick = function() {window.location.replace("hjem.html");};
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
	
	var grayMain = document.getElementById("grayMain");
	var main = document.getElementById("main");
	grayMain.style.height = "0";
	grayMain.style.height = main.scrollHeight + "px";
}

function jobOverview() {
	var forrige = document.getElementById("forrige");
	var neste = document.getElementById("neste");

	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("simple").onclick = function() {};
	document.getElementById("main").style.zIndex = "10";
	var text = "Det er her du velger jobber. Som du ser trenger du bedre hardware for å gjøre jobber man tjener mer på."
				+ " Men jo vanskeligere jobb, jo større cooldown. Denne blir mindre jo bedre hardware man har.";
	document.getElementById("text").innerHTML = text;
	neste.style.visibility = "visible";
	forrige.innerHTML = "&#8592; Forrige";
	forrige.onclick = function() {start();};
	neste.onclick = function() {doJob();};
}

function doJob() {
	var simple = document.getElementById("simple");

	document.getElementById("grayMain").style.visibility = "visible";
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "10";
	document.getElementById("jobTxt").style.zIndex = "14";
	document.getElementById("jobButton").style.zIndex = "14";
	document.getElementById("cash").innerHTML = "$1500";
	document.getElementById("xp").innerHTML = "1000 xp";
	simple.style.zIndex = "14";
	simple.onclick = function() {countDown();};
	document.getElementById("text").innerHTML = "Prøv å trykke på <strong>Simple Job</strong>!";
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
	var neste = document.getElementById("neste");
	var forrige = document.getElementById("forrige");

	document.getElementById("grayMain").style.visibility = "hidden";
	document.getElementById("simple").innerHTML = "Simple Job";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("navbar").style.zIndex = "10";
	document.getElementById("cash").innerHTML = "$1600";
	document.getElementById("xp").innerHTML = "1050 xp";
	var text = "Jobben er nå ferdig. Hvis du er observant ser du at du nå har tjent $100 og 50 xp!"
				+ " Vi skal se hva dette kan brukes til senere.";
	document.getElementById("text").innerHTML = text;
	neste.style.visibility = "visible";
	neste.onclick = function() {topBar();};
	forrige.style.visibility = "visible";
	forrige.onclick = function() {doJob();};
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("text").innerHTML = "Da har vi sett på <strong>Jobber</strong>. La oss trykke på <strong>Hardware</strong> og sjekke ut hva dette er!";
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {reward();};
}