<?php

echo <<<_END


<script>
var b = 0;
function f(){
	
	
	if(b == 0)
	{
		document.getElementById('f').innerHTML = "<p><strong>Leder:</strong> Jens</p>";
		document.getElementById('f').innerHTML += "<p><strong>Nestleder:</strong> Erik</p>";
		document.getElementById('f').innerHTML += "<p><strong>Ansatte:</strong> Petter, Jørgen, MOHAMAD</p>";
		b = 1;
	}
	else
	{
		document.getElementById('f').innerHTML = "";
		b = 0;
	}
}

</script>



<div id="main" class="scroll">



<div id="yourCompany" class="company">

<div class="cLogo"></div>
<h5>Firmanavn <a href="javascript:void(0)" onclick="f()"> ansatte </a></h5> 

<p>Masse informasjon om firmaet hurra hurra hipp hipp Masse informasjon
om firmaet hurra hurra hipp hippMasse informasjon om firmaet hurra hurra
hipp hippMasse informasjon om firmaet hurra hurra hipphipp</p>

</div>
<div id="f"> </div>
<div id="space"> </div>


<h4>Firmajobber</h4>
<p>kommer snart...</p>
<br />


<h4><a href="javascript:void(0)"> Se alle andre firmaer</a></h4>
<br />



<div class="company">
<div class="cLogo"></div>
<h5>Firmanavn</h5>

<p>Masse informasjon om firmaet hurra hurra hipp hipp Masse informasjon
om firmaet hurra hurra hipp hippMasse informasjon om firmaet hurra hurra
hipp hippMasse informasjon om firmaet hurra hurra hipphipp</p>

</div>
<div id="f"> </div>
<div id="space"> </div>



<div class="company">

<div class="cLogo"></div>
<h5>Firmanavn</h5> 

<p>Masse informasjon om firmaet hurra hurra hipp hipp Masse informasjon
om firmaet hurra hurra hipp hippMasse informasjon om firmaet hurra hurra
hipp hippMasse informasjon om firmaet hurra hurra hipphipp</p>

</div>
<div id="f"> </div>
<div id="space"> </div>


<div class="company">

<div class="cLogo"></div>
<h5>Firmanavn</h5> 

<p>Masse informasjon om firmaet hurra hurra hipp hipp Masse informasjon
om firmaet hurra hurra hipp hippMasse informasjon om firmaet hurra hurra
hipp hippMasse informasjon om firmaet hurra hurra hipphipp</p>

</div>
<div id="f"> </div>
<div id="space"> </div>





</div>

_END;



?>