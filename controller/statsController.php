<?php

Class statsController Extends baseController {



	public function index() 
	{
		$query = "SELECT username FROM users ORDER BY uid DESC LIMIT 5";

		$result = queryMysql($query);
		$newestUsers = "";
		$number = $result->num_rows;

		while($row = $result->fetch_assoc()) 
		{
        	$newestUsers .= ucfirst($row['username'])."<br />";
   		}

   		$query = "SELECT username, saldo FROM users ORDER BY saldo DESC LIMIT 5";
   		$richest = "";
   		$result = queryMysql($query);
   		while($row = $result->fetch_assoc())
   		{
   			$richest .= ucfirst($row['username'])." $".$row['saldo']."<br />";
   		}

   		$query = "SELECT username, xp FROM users ORDER BY saldo DESC LIMIT 5";
   		$mostxp = "";
   		$result = queryMysql($query);
   		while($row = $result->fetch_assoc())
   		{
   			$mostxp .= ucfirst($row['username'])." ".$row['xp']."<br />";
   		}




   		// display variables
   		$this->registry->template->mostxp = $mostxp;
   		$this->registry->template->richestUsers = $richest;
   		$this->registry->template->usernumber = $number;
   		$this->registry->template->newestUsers = $newestUsers;
   		// gogo display
		$this->registry->template->show('stats');
	}

}

?>
