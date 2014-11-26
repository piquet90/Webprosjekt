<?php

echo <<<_END
<script>
var sekunder = [];
var interval = [];

function tell(navn) {
	var sek = sekunder[navn]
	sek = document.getElementById(navn).innerHTML;
	sekunder[navn] = parseInt(sek, 10);
	update(navn);
	interval[navn] = window.setInterval(function() {update(navn);}, 1000);
}

function update(id) {
	sekunder[id]--;
	var sek = sekunder[id];
	var timer = sek / 3600;
	var min = (sek % 3600) / 60;
	var restSek = (sek % 3600) % 60;
	timer = Math.floor(timer);
	min = Math.floor(min);
	restSek = Math.floor(restSek);
	document.getElementById(id).innerHTML = ("0" + timer).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + restSek).slice(-2);
	if(sek == 0) {
		document.getElementById(id).innerHTML = "00:00:00";
		clearInterval(interval[id]);
		window.setTimeout(function() {window.location.href = "index.php?rt=jobs/index";}, 2000);
	}
}
</script>

<div id="main" class="scroll">
<div id="space"></div>


<div class="desc"><h4>Enkel jobb</h4> Du skal kode en nettside for en kompis. Du bruker <h7>4</h7> minutter og du får 100 dollar for jobben.</div>
<div class="buttonOuter"><a href="$simplepath"><div class="buttonInner">$simple</div></a></div>

<div class="desc"><h4>Medium jobb</h4> Du skal kode noe annet. Du bruker <h7>8</h7> minutter og du får 400 dollar. Du må ha en
<a href="index.php?rt=hardware/index">Dell Latitude</a> eller bedre.</div>

<div class="buttonOuter"><a href="$mediumpath"><div class="buttonInner">$medium</div></a></div>

<div class="desc"><h4>Vanskelig jobb</h4> Du skal lage et system for et lite firma. Du bruker <h7>16</h7> minutter på jobben og du får 1600 dollar. Du må ha en <a href="index.php?rt=hardware/index">Macbook Pro</a> eller bedre.</div>
<div class="buttonOuter"><a href="$hardpath"><div class="buttonInner">$hard</div></a></div>


</div>

_END;



?>