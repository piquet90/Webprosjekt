<?php


echo <<<_END
<!DOCTYPE html>
<html lang="NO">
<head>
<title>
Silicon Valley Startup
</title>

<link href='http://fonts.googleapis.com/css?family=Glegoo' rel='stylesheet' type='text/css'>

<link rel="stylesheet" href="$css" />
<link rel="stylesheet" media="only screen and (min-devicewidth: 320px) and (max-width: 480px)" type="text/css" href="style/styleMobile.css" />
<link href='http://fonts.googleapis.com/css?family=Black+Ops+One' rel='stylesheet' type='text/css'>



<meta charset="UTF-8" />
</head>
<body>

<div id="wrapper">
<div id="topbar">
<ul>
	<li><a href="$mainpage" class="l">Hjem</a></li
	><li><a href="$jobs" class="l">Jobber</a></li
	><li><a href="$hardware" class="l">Hardware</a></li
	><li><a href="$company" class="l">Firma</a></li
	><li><a href="$stats" class="l">Spillstatistikk</a></li
	><li><a href="$minigame" class="l">Minispill</a></li
	><li><a href="$logout" class="r"><strong>Logg ut</strong></a></li>
</ul>
</div>
<div id="navbar">
<div class="userImg"></div>
<ul>

	<li class="user"><a href=""><strong>$username</strong></a></li>
	<li class="cell">Nybegynner</li>
	<li class="cell"><strong>Konto</strong> <br>$$saldo</li>
	<li class="cell"><strong>Firma</strong><br><a href="">$coid</a></li>
	<li class=""><strong>Erfaringspoeng<br></strong> $xp xp</li>
</ul>
</div>
_END;
// </div> <!--end of wrapper--> moved to footer.php
?>