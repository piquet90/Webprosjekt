tell();

var sek;
var interval;

function tell() {
	sek = document.getElementById("teller").innerHTML;
	sek = parseInt(sek, 10);
	update();
	interval = setInterval(update, 1000);
}

function update() {
	sek -= 1;
	var timer = sek / 3600;
	var min = (sek % 3600) / 60;
	var restSek = (sek % 3600) % 60;
	document.getElementById("teller").innerHTML = Math.floor(timer) + ":" + Math.floor(min) + ":" + Math.floor(restSek);
	if(sek <= 0) {
		clearInterval(interval);
		document.getElementById("teller").innerHTML = '<a href="index.php?rt=jobs/simple">Simple Job</a>';
	}
}