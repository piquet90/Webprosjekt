<?php


echo <<<_END

<div id="clear"></div>
<div id="wrapper">
<h1>$appname</h1>
<div id="frame"><div id="register">
<h2>Registrer bruker</h2>
<form id="register" method="POST" action="register.php">
<span class="inputlabel">Fornavn:</span><input type="text" name="firstname" maxlength="20"><br />
<span class="inputlabel">Etternavn:</span><input type="text" name="lastname" maxlength="20"><br />
<span class="inputlabel">Brukernavn:</span><input type="text" name="username" maxlength="20"><br />
<span class="inputlabel">Epost:</span><input type="text" name="email"><br />
<span class="inputlabel">Passord:</span><input type="password" name="password1"><br />
<span class="inputlabel">Gjenta passord:</span><input type="password" name="password2"><br />
<span class="inputlabel">&nbsp</span><input type="submit" value="Bli medlem">
</form>
<p class="center"><a href="$loginpath">Already have a user?</a></p>
</div>
</div></div>


_END;

?>