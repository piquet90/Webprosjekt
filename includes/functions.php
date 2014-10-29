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


?>