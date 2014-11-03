<?php

Class loginController Extends baseController {



	public function loggedin()
	{
		$this->registry->template->css = 'style/'.'style2.css';


		$this->registry->template->logout = 'logout.php';
		$uid = $_SESSION['uid'];

		$query = "SELECT * FROM users WHERE uid='$uid'";
		$result = queryMysql($query);

		$row = $result->fetch_array(MYSQLI_ASSOC);

		$this->registry->template->username = ucfirst($row['username']);


		$this->registry->template->mainpage = makePath("main/index");

		$this->registry->template->show('headerloggedin');

	}

	public function index() 
	{
		$this->registry->template->css = 'style/'.'style1.css';
		$this->registry->template->show('header');
	}

}

?>
