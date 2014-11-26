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
	> | <a href="$forgotpath">Glemt passord</a
	> | <a href="">FAQ</a
	> | <a href="">Kontakt oss</a></p>
</ul></center>
</div>




<div id="src">Image: <a href="https://www.flickr.com/photos/teegardin/6093690339/in/photostream/">Graph With Stacks Of Coins</a> by Ken Teegardin, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-2.0</a></div>

</div>

_END;


?>