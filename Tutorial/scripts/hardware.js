function start() {
	setInterval(boxSize, 1);
	
	var text =  "Dette er Hardware siden. Her kjøper du nytt utstyr som gjør at du kan gjøre vanskeligere jobber,"
				+ " og senker cooldown på jobber."
				+ "<br/><br/><div onclick='hwOverview()' class='link'>Neste</div>";
	
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
	}
	width --;
	box.style.height = height + "px";
	box.style.width = width + "px";
}

function hwOverview() {
	document.getElementById("main").style.zIndex = "10";
	var text = "Det er her du kjøper hardware. Som du ser er koster PC-utstyret mer jo bedre det er."
				+ " IBM 4Kilo er standard PC'en som alle starter med. Det vil da også si deg!"
				+ "<br/><br/><div onclick='kjop()' class='link'>Neste</div>";
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
	+ "<br/><br/><div onclick='topBar()' class='link'>Neste</div>";
	document.getElementById("textBox").innerHTML = text;
}

function topBar() {
	document.getElementById("navbar").style.zIndex = "1";
	document.getElementById("main").style.zIndex = "1";
	document.getElementById("topbar").style.zIndex = "10";
	document.getElementById("textBox").innerHTML = "Da har vi sett på hardware. La oss trykke på Firma og sjekke ut hva dette er!";
}