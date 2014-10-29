<?php

class db {


	private $connection;

	function __construct()
	{
		require_once __SITE_PATH.'/includes/'.'db_login.php';

		$this->$connection = new mysqli($db_host, $db_username, $db_password, $db_database);
		if ($connection->connect_error) exit($connection->connect_error);
		unset($db_password);
	}

	static function queryMysql($query)
	{
		$this->$connection;
		$result = $connection->query($query);
		if (!$result) exit($connection->error);
		return $result;
	}
}

?>
