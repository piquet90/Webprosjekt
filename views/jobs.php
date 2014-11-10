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
<h3>Jobs</h3>
<p>Her kommer det jobber som man kan gjøre</p>

<ol>
<li id="plass1">$simple</li>
<li id="plass2"><div id="teller2">26000</div><script>tell("teller2", "plass2");</script></li>
<li></li>
<li></li>
</ol>
</div>

_END;



?>