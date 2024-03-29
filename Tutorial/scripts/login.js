function start() {
	setInterval(boxSize, 1);
	
	document.getElementById("frame").style.zIndex = "1";
	var text = "Velkommen til <h3>Silicon Valley Startup Tutorial</h3>! Her skal vi gå igjennom alle funksjoner i spillet,"
				+ " så du selv kan komme deg i gang så fort som mulig! La oss begynne med å logge inn.";
	document.getElementById("text").innerHTML = text;
	document.getElementById("forrige").style.visibility = "hidden";
	document.getElementById("neste").onclick = function() {overView();};
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
}

function overView() {
	var forrige = document.getElementById("forrige");
	var neste = document.getElementById("neste");

	document.getElementById("error").innerHTML = "";
	document.getElementById("frame").style.zIndex = "10";
	var text = "Dette er innloggingsmodulen. I tillegg til å logge inn, kan du også herfra komme til andre sider"
				+ " ved å trykke på knappene nederst. For nå skal vi bare logge inn.";
	document.getElementById("text").innerHTML = text;
	forrige.style.visibility = "visible";
	forrige.onclick = function() {start();};
	neste.style.visibility = "visible";
	neste.onclick = function() {info();};
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