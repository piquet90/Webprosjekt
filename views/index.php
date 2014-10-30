<?php


echo <<<_END

<div id="wrapper">

<h1>$appname</h1>







<div id="frame">

<h2>LOGG INN</h2>

<form method="post" action="index.php">
<input type="text" name="username" placeholder="Brukernavn" value="$user">
<input type="password" name="password" placeholder="Passord">
<input type="submit" value="Log in">
<div id="error">$error</div>
</form>

	<p><a href="$registerpath">Bli medlem</a
	> | <a href="$forgotpath">Glemt passord</a
	> | <a href="">FAQ</a
	> | <a href="">Kontakt oss</a></p>
	
</ul>

</div>


</div>

_END;


?>