var flyttTimer;
var points = 0;
var forrigeknapp = true;
var knapp = 0;
var timere = [];
var startTid = [];
var timeOut;
var timereFall;
var divTeller = 0;
var tid = 1300;
var fart = 4;
var space = true;
var freeze = false;

function flyttFigur(event) {
	switch(event.keyCode) {
	case 37:	if(freeze && (forrigeknapp || knapp == 0)) {
					clearInterval(flyttTimer);
					flyttTimer = window.setInterval(venstre, 0.1);
					forrigeknapp = false;
					knapp = 1;
				}
				break;
	case 39:	if(freeze && (forrigeknapp || knapp == 1)) {
					clearInterval(flyttTimer);
					flyttTimer = window.setInterval(hoyre, 0.1);
					forrigeknapp = false;
					knapp = 0;
				}
				break;
	case 32:	if(space) {
					start();
				}
				break;
	default:
	}
}

function hoyre() {
	var element = document.getElementById("figur");
	for(var i = 0; i < fart; i++) {
		var x = element.offsetLeft;
		element.style.left = (x + 1) + "px";
	}
		
	sjekkPos();
}

function venstre() {
	var element = document.getElementById("figur");
	for(var i = 0; i < fart; i++) {
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
	space = false;
	freeze = true;
	fart = 4;
	tid = 1300;
	var c = document.getElementById("melding");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	points = 0;
	poeng();
	document.getElementById("start").disabled = true;
	document.getElementById("dot1").style.left = Math.floor(Math.random() * 790) + "px";
	timere[divTeller] = window.setInterval(function() {fall("dot1", divTeller)}, 1);
}

function lagdiv() {
	divTeller++;
	var id = "dot" + (divTeller + 1);
	var div = document.createElement("div");
	div.setAttribute("class", "dot");
	div.setAttribute("id", id);
	document.getElementById("ramme").appendChild(div);
	timere[divTeller] = window.setInterval(function() {fall(id, divTeller)}, 1);
}

function fall(id, index) {
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
			poeng();
			element.style.top = "-20px";
			element.style.left = Math.floor(Math.random() * 790) + "px";
			if(points%150 == 0) {
				fart += 2;
				tid += 1400;
				timeOut = window.setTimeout(lagdiv, tid);
				startTid[index] = (new Date()).getTime();
			}
		}
		else {
			for(var i = 0; i < timere.length; i++) {
				document.getElementById("dot" + (i + 1)).style.top = "-20px";
				clearInterval(timere[i]);
			}
			clearInterval(timeOut);
			gameOver();
			document.getElementById("start").disabled = false;
			document.getElementById("start").innerHTML = "Prøv igjen!";
			divTeller = 0;
			clearInterval(flyttTimer);
			freeze = false;
			elementF.style.left = "350px";
			space = true;
		}
	}
}

function poeng() {
	var tekst = "00000";
	switch(points.toString().length) {
		case 1:		tekst = "0000" + points;
					break;
		case 2:		tekst = "000" + points;
					break;
		case 3:		tekst = "00" + points;
					break;
		case 4:		tekst = "0" + points;
					break;
		case 5:		tekst = points;
					break;
		default:
	}
	var c = document.getElementById("poeng");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.font = "30px 'Black Ops One'";
	ctx.fillText(tekst, 175, 50);
}

function gameOver() {
	var tekst = "GAME OVER!";
	var c = document.getElementById("melding");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.font = "30px 'Black Ops One'";
	ctx.fillText(tekst, 100, 100);
}