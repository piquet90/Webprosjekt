<?php

$string = "opgra295";
$hash = hash('ripemd128', $string);
echo $hash;

?>