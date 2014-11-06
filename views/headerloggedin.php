<?php

echo <<<_END
<!DOCTYPE html>
<html>
<head>
<title>
Silicon Valley Startup
</title>
<link rel="stylesheet" type="text/css" href="$css">

<link href='http://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet' type='text/css'>

<meta charset="UTF-8" />
</head>
<body>



<div id="wrapper">
<div id="topbar">
<ul>
	<li><a href="$mainpage">Hovedside</a></li
	><li><a href="$jobs">Jobber</a></li
	><li><a href="$hardware">Hardware</a></li
	><li><a href="$company">Firmaer</a></li
	><li><a href="$stats">Spillstatistikk</a></li
	><li><a href="$logout">Logg ut</a></li>
</ul>
</div>



<div id="navbar">
<div class="userImg" profilepicture style="background:url(img/agent-smith.jpg) no-repeat center;"></div>
<ul>

	<li class="user"><strong><a href="">$username</strong></a></li>
	<li class="cell">Nybegynner</li>
	<li class="cell"><strong>Konto</strong> <br>$$saldo</li>
	<li class="cell"><strong>Firma</strong><br><a href="">$coid</a></li>
	<li class=""><strong>Erfaringspoeng<br></strong> $xp xp</li>
</ul>
</div>
_END;
// </div> <!--end of wrapper--> moved to footer.php
?>