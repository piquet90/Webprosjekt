function start() {
	setInterval(boxSize, 1);
	
	var text = "Dette er spillets hovedside. Dette er hovedsentralen for hele spillet!"
				+ "<br/><br/><p onclick='navBar()' id='link'>Neste</p>";
	
	document.getElementById("textBox").innerHTML = text;
}

function boxSize() {
	var wrapper = document.getElementById("wrapper");
	var box = document.getElementById("grayBox");
	var wrapW = wrapper.offsetWidth;
	var wrapH = wrapper.offsetHeight;
	var wrapL = wrapper.offsetLeft;
	var wrapT = wrapper.offsetTop;
	var windowH = window.innerHeight;
	
	var width = (wrapL * 2) + wrapW;
	var height;
	if((wrapH + wrapT) <= windowH) {
		height = windowH + 10;
	}
	else {
		height = wrapH + wrapT + 10;
		width--;
	}
	box.style.height = height + "px";
	box.style.width = width + "px";
}

function navBar() {
	document.getElementById("navbar").style.zIndex = "10";
	document.getElementById("textBox").style.left = "38rem";
	document.getElementById("textBox").style.top = "25rem";
	var text = "Dette er navigasjonsbaren din. Her står all info om deg."
				+ "<br/><br/><p onclick='topBar()' id='link'>Neste</p>";
	document.getElementById("textBox").innerHTML = text;
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("textBox").style.left = "30rem";
	document.getElementById("textBox").style.top = "10rem";
	var text = "Dette er hovedmenyen. Det er her du navigerer deg gjennom alle ting du kan gjøre i spillet."
				+ "<br/><br/>La oss trykke på Jobber og sjekke ut denne funksjonen!";
	document.getElementById("textBox").innerHTML = text;
}