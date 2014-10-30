<?php

Class loginController Extends baseController {



	public function loggedin()
	{
		$this->registry->template->css = 'style/'.'style2.css';
		$this->registry->template->logout = 'logout.php';
		$this->registry->template->show('headerloggedin');

	}

	public function index() 
	{
		$this->registry->template->css = 'style/'.'style1.css';
		$this->registry->template->show('header');
	}

}

?>
