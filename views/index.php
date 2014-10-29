<?php


echo <<<_END

<h1>$appname</h1>
<div id="login">
<h2>LOGG INN</h2>
<form method="post" action="login.php">
<input type="text" name="username" placeholder="Brukernavn" value="$user">
<input type="password" name="password" placeholder="Passord">
<input type="submit" value="Log in">
<div id="error">$error</div>
</form>
<ul>
	<li><a href="register.php">Bli medlem</a></li>
	<li><a href="forgot.php">Glemt passord</a></li>
</ul>
</div>

_END;


?>