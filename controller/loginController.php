<?php

Class loginController Extends baseController {



	public function loggedin($userid)
	{

	}

	public function index() 
	{
		$this->registry->template->css = '/style/'.'style1.css';
		 $this->registry->template->show('header');
	}

}

?>
