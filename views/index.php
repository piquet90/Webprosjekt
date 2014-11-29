<?php


echo <<<_END


<div id="hello"></div>

<div id="wrapper">
<h1>$appname</h1>


<div id="frame">

<h2>LOGG INN</h2>

<center><form method="post" action="index.php">
<input type="text" name="username" placeholder="Brukernavn" value="$user">
<input type="password" name="password" placeholder="Passord">
<input type="submit" value="Logg inn">
<div id="error">$error</div>
</form>

	<p><a href="$registerpath">Bli medlem</a
	> | <a href="../tutorial/index.html">Lær å spille</a
	> | <a href="mailto:mail@advm.no">Kontakt oss</a></p>
</ul></center>
</div>






</div>

_END;


?>