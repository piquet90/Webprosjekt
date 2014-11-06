<?php

Class statsController Extends baseController {



	public function index() 
	{
		$query = "SELECT * FROM users";

		$result = queryMysql($query);
		$users = "";

		while($row = $result->fetch_assoc()) 
		{
        	$users .= ucfirst($row['username'])."<br />";
   		}

   		$this->registry->template->users = $users;







		$this->registry->template->show('stats');
	}

}

?>
