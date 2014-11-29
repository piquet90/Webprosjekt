<?php

// Registry class for passing variables. This lets us avoid GLOBALS and it uses the magic functions __set and __get.
Class Registry {

 /*
 * @the vars array
 * @access private
 */
 private $vars = array();


 /**
 *
 * @set undefined vars
 *
 * @param string $index
 *
 * @param mixed $value
 *
 * @return void
 *
 */
 public function __set($index, $value)
 {
	$this->vars[$index] = $value;
 }

 /**
 *
 * @get variables
 *
 * @param mixed $index
 *
 * @return mixed
 *
 */
 public function __get($index)
 {
	return $this->vars[$index];
 }


}

?>
