<?php


echo <<<_END

<div id="wrapper">

<h1>$appname</h1>



<h2>LOGG INN</h2>
<form method="post" action="login.php">
<input type="text" name="username" placeholder="Brukernavn" value="$user">
<input type="password" name="password" placeholder="Passord">
<input type="submit" value="Log in">
<div id="error">$error</div>
</form>
<ul>
	<li><a href="$registerpath">Bli medlem</a></li>
	<li><a href="$forgotpath">Glemt passord</a></li>
</ul>

</div>

_END;


?>