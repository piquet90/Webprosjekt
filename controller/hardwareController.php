<?php

Class hardwareController Extends baseController {



	public function index() 
	{
		$uid = $_SESSION['uid'];
		$query = "SELECT * FROM users WHERE uid='$uid'";
		$result = queryMysql($query);
		$row = $result->fetch_assoc();
		$hwlevel = $row['hwlevel'];
		$this->registry->template->formpath = makePath('hardware/upgrade');
		for($i=1; $i<=5; $i++)
		{
			$this->registry->template->{"hwl".$i} = $i;
			if($hwlevel > $i) $this->registry->template->{"hw".$i} = 'Nedgradering" disabled';
			else if($hwlevel == $i) $this->registry->template->{"hw".$i} = 'Du eier denne" disabled';
			else if($hwlevel < $i) $this->registry->template->{"hw".$i} = 'Kjøp"';
		}
		$this->registry->template->show('hardware');
	}

}

?>
