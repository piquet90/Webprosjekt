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

<h1>Silicon Valley Startup</h1>

<div id="wrapper">

<div id="topbar">
<ul>
	<li><a href="">Oppdrag</a></li
	><li><a href="">Småjobber</a></li
	><li><a href="">Kjøp utstyr</a></li
	><li><a href="">Firmaer</a></li
	><li><a href="">Spillstatistikk</a></li
	><li><a href="$logout">Logg ut</a></li>
</ul>
</div>



<div id="navbar">
<div class="userImg" profilepicture style="background:url(img/agent-smith.jpg) no-repeat center;"></div>
<ul>

	<li class="user"><strong><a href="">Navn</strong></a></li>
	<li class="cell">Level</li>
	<li class="cell"><strong>Konto</strong><br> 189 813 913 111</li>
	<li><strong>Firma</strong><br><a href="">Microsoft</a></li>
	<li class="cell">Daglig leder</li>

	<li class=""><strong>EXP:</strong> xp</li>
</ul>
</div>
_END;
// </div> <!--end of wrapper--> moved to footer.php
?>