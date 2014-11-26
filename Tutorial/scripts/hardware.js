function start() {
	setInterval(boxSize, 1);
	
	var text =  "Dette er Hardware siden. Her kjøper du nytt utstyr som gjør at du kan gjøre vanskeligere jobber,"
				+ " og senker cooldown på jobber."
				+ "<br /><br /><div onclick='hwOverview()' class='link'>Neste</div>";
	
	document.getElementById("textBox").innerHTML = text;
}

function boxSize() {
	var gray = document.getElementById("grayBox");
	gray.style.height = "0";
	gray.style.height = document.body.scrollHeight + "px";
	
	gray.style.width = "0";
	gray.style.width = document.body.scrollWidth + "px";
}

function hwOverview() {
	document.getElementById("main").style.zIndex = "10";
	var text = "Det er her du kjøper hardware. Som du ser er koster PC-utstyret mer jo bedre det er."
				+ " IBM 4Kilo er standard PC'en som alle starter med. Det vil da også si deg!"
				+ "<br /><br /><div onclick='kjop()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function kjop() {
	document.getElementById("kjop").onclick = function() {reward();};
	var text = "Du har nok penger til å kjøpe Asia LAPTOP FLEXI. Trykk på Kjøp under denne PC'en!";
	document.getElementById("textBox").innerHTML = text;
}

function reward() {
	var knapp = document.getElementById("kjop");
	knapp.disabled = true;
	knapp.value = "Du eier denne";
	document.getElementById("cash").innerHTML = "$100";
	document.getElementById("navbar").style.zIndex = "10";
	var text = "Gratulerer! Du har nå akkurat kjøpt din første PC! Jobber du gjør vil nå gå 10% raskere!"
	+ " Utstyr er selvfølgelig ikke gratis, og denne gangen kosta det deg 1500$."
	+ "<br /><br /><div onclick='topBar()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("textBox").innerHTML = "Da har vi sett på Hardware. La oss trykke på Firma og sjekke ut hva dette er!";
}