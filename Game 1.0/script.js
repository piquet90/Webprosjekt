var timer;
var flyttTimer;
var tall = 0;
var points = 0;
var forrigeknapp = true;

function flyttFigur(event) {
	if(forrigeknapp) {
		switch(event.keyCode) {
		case 37:	flyttTimer = window.setInterval(venstre, 0.1);
					forrigeknapp = false;
					break;
		case 39:	flyttTimer = window.setInterval(hoyre, 0.1);
					forrigeknapp = false;
					break;
		default:
		}
	}
}

function hoyre() {
	var element = document.getElementById("figur");
	var x = element.offsetLeft;
	element.style.left = (x + 2) + "px";
		
	sjekkPos();
}

function venstre() {
	var element = document.getElementById("figur");
	var x = element.offsetLeft;
	element.style.left =  (x - 2) + "px";
		
	sjekkPos();
}

function stoppFlytting(event) {
	switch(event.keyCode) {
	case 37:	
	case 39:	clearInterval(flyttTimer);
				forrigeknapp = true;
				break;
	default:
	}
}

function sjekkPos() {
	var element = document.getElementById("figur");
	
	var left = element.offsetLeft;
	var width = element.offsetWidth;
	var bWidth = 800;
	if(left < 0) {
		element.style.left = "0px";
	}
	if((left + width) > bWidth) {
		element.style.left = (bWidth - width) + "px";
	}
}

function start() {
	tall = -20;
	points = 0;
	document.getElementById("start").disabled = true;
	document.getElementById("dot1").style.left = Math.floor(Math.random() * 790) + "px";
	timer = window.setInterval(fall, 100);
}

function fall() {
	tall += 20;
	var element = document.getElementById("dot1");
	var elementF = document.getElementById("figur");
	var txt = "";
	element.style.top = tall + "px";
	if(element.offsetTop == 400) {
		var maxL = elementF.offsetLeft;
		var maxR = maxL + elementF.offsetWidth;
		var dotL = element.offsetLeft;
		var dotR = dotL + element.offsetWidth;
		if(dotR > maxL && dotL < maxR) {
			points += 10;
			tall = -20;
			element.style.left = Math.floor(Math.random() * 790) + "px";
		}
		else {
			clearInterval(timer);
			txt = "GAME OVER. Din score: ";
			document.getElementById("start").disabled = false;
			document.getElementById("start").innerHTML = "Prøv igjen!";
		}
	}
	document.getElementById("tekst").innerHTML = txt + points;
}