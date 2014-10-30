<?php
session_start();
$string = "123";
$hash = hash('ripemd128', $string);
echo $hash;

if(isset($_SESSION['uid']))
{
	echo "<p>logon good to go</p>";
}

?>