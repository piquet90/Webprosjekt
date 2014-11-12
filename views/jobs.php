<?php

echo <<<_END
<script>
var sekunder = [];
var interval = [];

function tell(navn, plass) {
	var sek = sekunder[navn]
	sek = document.getElementById(navn).innerHTML;
	sekunder[navn] = parseInt(sek, 10);
	update(navn, plass);
	interval[navn] = window.setInterval(function() {update(navn, plass);}, 1000);
}

function update(id, plass) {
	sekunder[id]--;
	var sek = sekunder[id];
	var timer = sek / 3600;
	var min = (sek % 3600) / 60;
	var restSek = (sek % 3600) % 60;
	timer = Math.floor(timer);
	min = Math.floor(min);
	restSek = Math.floor(restSek);
	document.getElementById(id).innerHTML = ("0" + timer).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + restSek).slice(-2);
	if(sek <= 0) {
		clearInterval(interval[id]);
		document.getElementById(id).innerHTML = "";
		document.getElementById(plass).innerHTML = '<a href="index.php?rt=jobs/simple">Simple Job</a>';
	}
}
</script>
<div id="main" class="scroll">

<div id="space"></div>

<div class="desc"><h4>Enkel jobb</h4> Cooldown 4 minutter. Du kan få max 1 dollar og trenger ikke noe hardware</div>
<div class="buttonOuter"><a href="$simplepath"><div class="buttonInner">$simple</div></a></div>

<div class="desc"><h4>Medium jobb</h4> Cooldown 8 minutter. Du kan få max 10 dollar og må være i hardware-level 3 eller høyere</div>
<div class="buttonOuter"><a href="$mediumpath"><div class="buttonInner">$medium</div></a></div>

<div class="desc"><h4>Vanskelig jobb</h4> Cooldown 10 minutter. Du kan få max 100 dollar og du må være i hardware-level 5 eller høyere</div>
<div class="buttonOuter"><a href="$hardpath"><div class="buttonInner">$hard</div></a></div>


</div>

_END;



?>