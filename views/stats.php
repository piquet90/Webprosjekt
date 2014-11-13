<?php

echo <<<_END
<div id="main" class="scroll">
<h3>Spillstatistikk</h3>
<p>Her kommer det leaderboards</p>

<p>Det er totalt <h7>$usernumber</h7> registrerte spillere</p>



<div class="usersOnline">
<p>Det er <h7>2066</h7> spillere pålogget:</p>

Jørgen, <div class="firmaeier">Erik</div>, Johan Erik Samuelsen, Somaliano, børge børresen, <div class="admin">Audun</div>, øyeschtein, ØYSTEIN, playstation 4, harry pothead, erik samuelsen, south park e best

<ul>
	<li>Spiller</li>
	<li><div class="admin">Administrator</div></li>
	<li><div class="firmaeier">Firmaeier</div></li>
</ul>

</div>


<br><br>


<div id="left" class="stats"><h7>Sist registrerte</h7>
<br><br>
<p>$users</p>
<p>$users</p>
</div>



<div class="stats"><h7>10 rikeste</h7>
<br><br>
<p>$users</p>
<p>$users</p>
</div>


<div id="right" class="stats"><h7>10 høyest rank</h7>
<br><br>
<p>$users</p>
<p>$users</p>
</div>

_END;



?>