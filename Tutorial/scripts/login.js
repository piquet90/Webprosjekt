function start() {
	setInterval(boxSize, 1);
	
	document.getElementById("frame").style.zIndex = "1";
	var text = "Velkommen til Silicon Valley Startup Tutorial! Her skal vi gå igjennom alle funksjoner i spillet,"
				+ " så du selv kan komme deg i gang så fort som mulig! La oss begynne med innlogging.";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").style.visibility = "hidden";
	document.getElementById("neste").onclick = function() {overView();};
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	gray.style.height = document.body.scrollHeight + "px";
	
	gray.style.width = "0";
	gray.style.width = document.body.scrollWidth + "px";
}

function overView() {
	document.getElementById("error").innerHTML = "";
	document.getElementById("neste").style.visibility = "visible";
	document.getElementById("frame").style.zIndex = "10";
	var text = "Dette er innloggingsmodulen. I tillegg til å logge inn, kan du også herfra komme til andre sider"
				+ " ved å trykke på knappene nederst. For nå skal vi bare logge inn.";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").style.visibility = "visible";
	document.getElementById("neste").onclick = function() {info();};
	document.getElementById("forrige").onclick = function() {start();};
	document.getElementById("submit").disabled = true;
}

function info() {
	var text = "Vi har laget en <q>tutorial bruker</q> for deg. Skriv inn infoen under og trykk <q>Logg inn</q>:"
				+ "<br />Brukernavn: admin<br />Passord: 12345";
	document.getElementById("text").innerHTML = text;
	document.getElementById("neste").style.visibility = "hidden";
	document.getElementById("forrige").onclick = function() {overView();};
	document.getElementById("submit").disabled = false;
}

function logIn() {
	var error = document.getElementById("error");
	var user = document.forms["input"]["username"].value;
	var password = document.forms["input"]["password"].value;
	if(user == "") {
		error.innerHTML = "Username is empty";
	}
	else if(password == "") {
		error.innerHTML = "Please enter a password";
	}
	else if(user == "admin" && password == "12345") {
		window.location.replace("hjem.html");
	}
	else{
		error.innerHTML = "Wrong username or password";
	}
	return false;
}

function validate() {
	var user = document.forms["input"]["username"].value;
	var password = document.forms["input"]["password"].value;
	if(user == "admin" && password == "12345") {
		return true;
	}
	return false;
}