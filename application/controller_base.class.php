<?php
// Base controller class. Each controller we create will be sub-classes of this abstract class.
Abstract Class baseController {


protected $registry;

function __construct($registry) {
	$this->registry = $registry;
}


abstract function index();
}

?>
