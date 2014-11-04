var flyttTimer;
var points = 0;
var forrigeknapp = true;
var knapp = 0;
var timere = [];
var timereFall;
var divTeller = 0;
var tid = 1000;

function flyttFigur(event) {
	switch(event.keyCode) {
	case 37:	if(forrigeknapp || knapp == 0) {
					clearInterval(flyttTimer);
					flyttTimer = window.setInterval(venstre, 0.1);
					forrigeknapp = false;
					knapp = 1;
				}
				break;
	case 39:	if(forrigeknapp || knapp == 1) {
					clearInterval(flyttTimer);
					flyttTimer = window.setInterval(hoyre, 0.1);
					forrigeknapp = false;
					knapp = 0;
				}
				break;
	default:
	}
}

function hoyre() {
	var element = document.getElementById("figur");
	for(var i = 0; i < 5; i++) {
		var x = element.offsetLeft;
		element.style.left = (x + 2) + "px";
	}
		
	sjekkPos();
}

function venstre() {
	var element = document.getElementById("figur");
	for(var i = 0; i < 5; i++) {
		var x = element.offsetLeft;
		element.style.left =  (x - 2) + "px";
	}
	
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
	points = 0;
	document.getElementById("start").disabled = true;
	document.getElementById("dot1").style.left = Math.floor(Math.random() * 790) + "px";
	timere[divTeller] = window.setInterval(function() {fall("dot1")}, 1);
}

function lagdiv() {
	divTeller++;
	var id = "dot" + (divTeller + 1);
	var div = document.createElement("div");
	div.setAttribute("class", "dot");
	div.setAttribute("id", id);
	document.getElementById("ramme").appendChild(div);
	timere[divTeller] = window.setInterval(function() {fall(id)}, 1);
}

function fall(id) {
	var element = document.getElementById(id);
	var elementF = document.getElementById("figur");
	var txt = "";
	var tall = element.offsetTop;
	for(var i = 0; i < 2; i++) {
		tall += 1;
		element.style.top = tall + "px";
	}
	if(element.offsetTop >= 400) {
		var maxL = elementF.offsetLeft;
		var maxR = maxL + elementF.offsetWidth;
		var dotL = element.offsetLeft;
		var dotR = dotL + element.offsetWidth;
		if(dotR > maxL && dotL < maxR) {
			points += 10;
			element.style.top = (Math.floor(Math.random() * -500) -20) + "px";
			element.style.left = Math.floor(Math.random() * 790) + "px";
			if(points%50 == 0) {
				tid = Math.floor(Math.random() * 500) + 2200;
				window.setTimeout(lagdiv, tid);
			}
		}
		else {
			for(var i = 0; i < timere.length; i++) {
				document.getElementById("dot" + (i + 1)).style.top = "-20px";
				clearInterval(timere[i]);
			}
			txt = "GAME OVER. Din score: ";
			document.getElementById("start").disabled = false;
			document.getElementById("start").innerHTML = "Prøv igjen!";
		}
	}
	document.getElementById("tekst").innerHTML = txt + points;
}