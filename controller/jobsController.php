<?php

Class jobsController Extends baseController {



	public function index() 
	{
		/*
		$query = "SELECT * FROM userxp WHERE uid='$uid'";
		$result = queryMysql($query);

		$row = $result->fetch_array(MYSQLI_ASSOC);
		*/

		$this->registry->template->show('jobs');
	}

}

?>
