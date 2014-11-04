var timer1;
var timer2;
var flyttTimer;
var points = 0;
var forrigeknapp = true;
var knapp = 0;

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
		element.style.left = (x + 1) + "px";
	}
		
	sjekkPos();
}

function venstre() {
	var element = document.getElementById("figur");
	for(var i = 0; i < 5; i++) {
		var x = element.offsetLeft;
		element.style.left =  (x - 1) + "px";
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
	window.setTimeout(lagdiv, 1000);
	timer1 = window.setInterval(function() {fall("dot1")}, 100);
}

function lagdiv() {
	var div = document.createElement("div");
	div.setAttribute("class", "dot");
	div.setAttribute("id", "dot2");
	document.getElementById("ramme").appendChild(div);
	timer2 = window.setInterval(function() {fall("dot2")}, 100);
}

function fall(id) {
	var element = document.getElementById(id);
	var elementF = document.getElementById("figur");
	var tall = element.offsetTop;
	tall += 20;
	var txt = "";
	element.style.top = tall + "px";
	if(element.offsetTop >= 400) {
		var maxL = elementF.offsetLeft;
		var maxR = maxL + elementF.offsetWidth;
		var dotL = element.offsetLeft;
		var dotR = dotL + element.offsetWidth;
		if(dotR > maxL && dotL < maxR) {
			points += 10;
			element.style.top = "-20px";
			element.style.left = Math.floor(Math.random() * 790) + "px";
		}
		else {
			clearInterval(timer1);
			clearInterval(timer2);
			document.getElementById("dot2").style.top = "-20px";
			document.getElementById("dot1").style.top = "-20px";
			txt = "GAME OVER. Din score: ";
			document.getElementById("start").disabled = false;
			document.getElementById("start").innerHTML = "Prøv igjen!";
		}
	}
	document.getElementById("tekst").innerHTML = txt + points;
}