<?php

Class jobsController Extends baseController {

	private $uid;


	private $simplexp = 2;
	private $simplecash = 100;
	private $simpleCooldown = 240;
	private $simplehwlevel = 0;

	private $mediumxp = 8;
	private $mediumcash = 400;
	private $mediumCooldown = 480;
	private $mediumhwlevel = 3;

	private $hardxp = 32;
	private $hardcash = 1600;
	private $hardCooldown = 960;
	private $hardhwlevel = 5;

	private function job($type)
	{
		$row = $this->exists()->fetch_assoc();

		$diff = time()-$row[$type];

		$cooldown = $this->getCooldown($this->{$type."Cooldown"});

		if($diff>$cooldown)
		{
			$now = time();

			// get current XP
			$query = "SELECT * FROM users WHERE uid='$this->uid'";
			$result =queryMysql($query);
			$row = $result->fetch_assoc();
			if($row['hwlevel']<$this->{$type."hwlevel"})
			{

			}
			else
			{
				$xp = $row['xp']+$this->{$type."xp"};
				$balance = $row['saldo']+$this->{$type."cash"};

				// set time for job for use with cooldown
				$query = "UPDATE jobs SET $type='$now' WHERE uid='$this->uid'";
				queryMysql($query);



				// set time for job for use with cooldown
				$query = "UPDATE users SET xp='$xp', saldo='$balance' WHERE uid='$this->uid'";
				queryMysql($query);
			}

		}

	}
	public function simple()
	{
		$this->uid = $_SESSION['uid'];
		$this->job("simple");
		$this->index();
	}
	public function medium()
	{
		$this->uid = $_SESSION['uid'];

		$this->job("medium");
		$this->index();
	}
	public function hard()
	{
		$this->uid = $_SESSION['uid'];

		$this->job("hard");
		$this->index();
	}

	public function index() 
	{
		$this->uid = $_SESSION['uid'];

		$row = $this->exists()->fetch_assoc();


		$this->onCooldown("simple", 1, $row);
		$this->onCooldown("medium", 2, $row);
		$this->onCooldown("hard", 3, $row);


		$this->registry->template->show('jobs');
	}

	private function onCooldown($type, $nr, $r)
	{
		$row = $r;
		$now = time();
		$diff = $now-$row[$type];
		$query = "SELECT * FROM users WHERE uid='$this->uid'";
		$result =queryMysql($query);
		$row = $result->fetch_assoc();
		if($row['hwlevel']<$this->{$type."hwlevel"})
		{
			$this->registry->template->{$type} = 'Du trenger bedre hardware';
			$this->registry->template->{$type."path"} = makePath('jobs/index');
		}
		else if($diff>$this->getCooldown($this->{$type."Cooldown"}))
		{
			$this->registry->template->{$type} = ucfirst($type).' Job';
			$this->registry->template->{$type."path"} = makePath('jobs/'.$type);
		}
		else
		{
			$this->registry->template->{$type} = '<div id="teller' . $nr . '">' . ($this->getCooldown($this->{$type."Cooldown"})-$diff).'</div><script>tell("teller' . $nr . '");</script>';
			$this->registry->template->{$type."path"} = makePath('jobs/index');
		}
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
		
		$hardware = 1-(($row['hwlevel']*10)/100);

		$cd = $time * $hardware;

		return $cd;


	}
}

?>
