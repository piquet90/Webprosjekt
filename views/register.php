<?php


echo <<<_END

<h1>$appname</h1>
<div id="login">
<script src="javascript/js.js"></script>
<h2>Register</h2>
<form id="register" method="POST" action="register.php">
<span class="inputlabel">Fornavn:</span><input type="text" name="firstname" maxlength="20"><br />
<span class="inputlabel">Etternavn:</span><input type="text" name="lastname" maxlength="20"><br />
<span class="inputlabel">Brukernavn:</span><input type="text" name="username" maxlength="20"><br />
<span class="inputlabel">Epost:</span><input type="text" name="email"><br />
<span class="inputlabel">Passord:</span><input type="password" name="password1"><br />
<span class="inputlabel">Gjenta passord:</span><input type="password" name="password2"><br />
<span class="inputlabel">&nbsp</span><input type="submit" value="register">
</form>
<p><a href="index.php">Already have a user?</a></p>
</div>



_END;

?>