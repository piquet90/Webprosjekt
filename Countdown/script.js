var sek;
var interval;

function tell(sekunder) {
	sek = sekunder + 1;
	update();
	interval = setInterval(update, 1000);
}

function update() {
	sek -= 1;
	var timer = sek / 3600;
	var min = (sek % 3600) / 60;
	var restSek = (sek % 3600) % 60;
	document.getElementById("teller").innerHTML = "Timer: " + Math.floor(timer) + "<br />Minutter: " + Math.floor(min) + "<br />Sekunder: " + Math.floor(restSek);
	if(sek == 0) {
		clearInterval(interval);
	}
}