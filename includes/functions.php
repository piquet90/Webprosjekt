<?php

function queryMysql($query)
{
  global $connection;
  $result = $connection->query($query);
  if (!$result) die($connection->error);
  return $result;
}

function makePath($action)
{
	$modrewrite = false;
	if($modrewrite)
	{
		return '$action';
	}
	else
	{
		return 'index.php?rt='.$action;
	}

}

function sanitizeString($var)
{
  global $connection;
  $var = strip_tags($var);
  $var = htmlentities($var);
  $var = stripslashes($var);
  return $connection->real_escape_string($var);
}

function loginUser($usernameraw, $passwordraw)
{
	$username = sanitizeString($usernameraw);
	$password = sanitizeString($passwordraw);

	$password = hash('ripemd128', $password);

	$query = "SELECT * FROM users WHERE username='$username'";
	$result = queryMysql($query);

	$rows = $result->num_rows;

		if($rows>0)
		{
			$row = $result->fetch_array(MYSQLI_ASSOC);
			if($password == $row['password'])
			{
				return $row['uid'];
			}

		}
		else
		{
			return false;
		}

}

?>