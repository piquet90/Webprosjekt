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
		for($i=0; $i<=6; $i++)
		{
			$this->registry->template->{"hwl".$i} = $i;
			if($hwlevel > $i) 
			{
				$this->registry->template->{"hw".$i} = 'Nedgradering';
				$this->registry->template->{"hw".$i."disabled"} = "disabled";
			}
			else if($hwlevel == $i)
			{
				$this->registry->template->{"hw".$i} = 'Du eier denne';
				$this->registry->template->{"hw".$i."disabled"} = "disabled";
			
			}
			else if($hwlevel < $i) 
			{
				$this->registry->template->{"hw".$i} = 'Kjøp"';
				$this->registry->template->{"hw".$i."disabled"} = "";
			}
		}
		$this->registry->template->show('hardware');
	}

	public function upgrade()
	{
		$hwlvl = array(
				"1" => "1500",
				"2" => "4500",
				"3" => "9000",
				"4" => "18000",
				"5" => "34000",
				"6" => "68000"
			);

		$uid = $_SESSION['uid'];
		$lvl = sanitizeString($_POST['hwlvl']);

		$query = "SELECT * FROM users WHERE uid='$uid'";
		$result = queryMysql($query);
		$row = $result->fetch_assoc();
		if($row['saldo']>$hwlvl[$lvl])
		{
			$newlvl = $row['hwlevel']+$lvl;
			$newSaldo = $row['saldo']-$hwlvl[$lvl];
			$query = "UPDATE users SET saldo='$newSaldo', hwlevel='$newlvl' WHERE uid='$uid'";
			queryMysql($query);
		}

		$this->index();

	}

}

?>
