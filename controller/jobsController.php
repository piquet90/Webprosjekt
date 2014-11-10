<?php

Class jobsController Extends baseController {

	private $uid;
	private $simplexp = 2;
	private $simplecash = 100;
	public function simple()
	{
		$this->uid = $_SESSION['uid'];

		$row = $this->exists()->fetch_assoc();

		$diff = time()-$row['simple'];

		$cooldown = $this->getCooldown(240);

		if($diff>$cooldown)
		{
			$now = time();

			// set time for job for use with cooldown
			$query = "UPDATE jobs SET simple='$now' WHERE uid='$this->uid'";
			queryMysql($query);

			// get current XP
			$query = "SELECT * FROM users WHERE uid='$this->uid'";
			$result =queryMysql($query);
			$row = $result->fetch_assoc();

			$xp = $row['xp']+$this->simplexp;
			$balance = $row['saldo']+$this->simplecash;

			// set time for job for use with cooldown
			$query = "UPDATE users SET xp='$xp', saldo='$balance' WHERE uid='$this->uid'";
			queryMysql($query);

		}
		$this->index();
	}

	public function index() 
	{
		/*
		$query = "SELECT * FROM userxp WHERE uid='$uid'";
		$result = queryMysql($query);

		$row = $result->fetch_array(MYSQLI_ASSOC);
		*/
		$this->uid = $_SESSION['uid'];


		$row = $this->exists()->fetch_assoc();


		$now = time();
		$diff = $now-$row['simple'];

		if($diff>$this->getCooldown(240))
		{
			$this->registry->template->simple = '<a href="'.makePath('jobs/simple').'">Simple Job</a>';
		}
		else
		{
			$this->registry->template->simple = 'Simple Job on cooldown. Time to next: <div id="teller">'.($this->getCooldown(240)-$diff).' </div><script>tell("teller", "plass1");</script>';
		}

		$this->registry->template->show('jobs');
	}

	private function simpleJob()
	{
		makePath('jobs/simple');
	}

	private function exists()
	{
		$query = "SELECT * FROM jobs WHERE uid='$this->uid' ";
		$result = queryMysql($query);
		if($result->num_rows < 1)
		{
			$query = "INSERT INTO jobs (uid) VALUES ('$this->uid')";
			queryMysql($query);
			$query = "SELECT * FROM jobs WHERE uid='$this->uid' ";
			$result = queryMysql($query);
			return $result;
		}
		else
		{
			return $result;
		}
		
	}

	private function getCooldown($time)
	{
		$query = "SELECT * FROM users WHERE uid='$this->uid'";
		$result = queryMysql($query);

		$row = $result->fetch_assoc();
		
		$hardware = 1-(($row['hwlevel']*5)/100);

		$cd = $time * $hardware;

		return $cd;


	}

}

?>
