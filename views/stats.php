<?php

echo <<<_END
<div id="main" class="scroll">
<h3>Spillstatistikk</h3>

<p>Det er totalt <h7>$usernumber</h7> registrerte spillere</p>



<div class="usersOnline">
<p>Det er <h7>null</h7> spillere pålogget:</p>

Denne funksjonen er under utvikling

<ul>
	<li>Spiller</li>
	<li><div class="admin">Administrator</div></li>
	<li><div class="firmaeier">Firmaeier</div></li>
</ul>

</div>


<br><br>


<div id="left" class="stats"><h7>Sist registrerte</h7>
<br><br>
<p>$newestUsers</p>
</div>



<div class="stats"><h7>10 rikeste</h7>
<br><br>
<p>$richestUsers</p>
</div>


<div id="right" class="stats"><h7>10 høyest rank</h7>
<br><br>
<p>$mostxp</p>
</div>

_END;



?>