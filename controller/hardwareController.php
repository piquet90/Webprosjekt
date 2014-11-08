<?php

Class hardwareController Extends baseController {



	public function index() 
	{
		/*
		$query = "SELECT * FROM userxp WHERE uid='$uid'";
		$result = queryMysql($query);

		$row = $result->fetch_array(MYSQLI_ASSOC);
		*/
		
		$this->registry->template->hw1 = 'Du eier denne" disabled';
		$this->registry->template->hw2 = 'Oppgrader!"';
		$this->registry->template->hw3 = 'Du eier denne" disabled';
		$this->registry->template->hw4 = 'Du eier denne" disabled';
		$this->registry->template->hw5 = 'Du eier denne" disabled';

		$this->registry->template->show('hardware');
	}

}

?>
