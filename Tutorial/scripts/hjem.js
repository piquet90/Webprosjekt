function start() {
	setInterval(boxSize, 1);
	
	var text = "Dette er spillets hovedside. Dette er hovedsentralen for hele spillet!"
				+ "<br /><br /><div onclick='navBar()' class='link'>Neste</div>";
	
	document.getElementById("textBox").innerHTML = text;
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	gray.style.height = document.body.scrollHeight + "px";
	
	gray.style.width = "0";
	gray.style.width = document.body.scrollWidth + "px";
}

function navBar() {
	document.getElementById("navbar").style.zIndex = "10";
	var text = "Dette er navigasjonsbaren din. Her står all info om deg."
				+ "<br /><br /><div onclick='topBar()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	var text = "Dette er hovedmenyen. Det er her du navigerer deg gjennom alle ting du kan gjøre i spillet."
				+ "<br /><br />La oss trykke på Jobber og sjekke ut denne funksjonen!";
	document.getElementById("textBox").innerHTML = text;
}