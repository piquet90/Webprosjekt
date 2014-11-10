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
	document.getElementById(id).innerHTML = Math.floor(timer) + ":" + Math.floor(min) + ":" + Math.floor(restSek);
	if(sek <= 0) {
		clearInterval(interval[id]	);
		document.getElementById(id).innerHTML = '<a href="index.php?rt=jobs/simple">Simple Job</a>';
	}
}
</script>
<div id="main" class="scroll">
<h3>Jobs</h3>
<p>Her kommer det jobber som man kan gjøre</p>

<ol>
<li>$simple</li>
<li><div id="teller2">26000</div><script>tell("teller2");</script></li>
<li></li>
<li></li>
</ol>
</div>

_END;



?>