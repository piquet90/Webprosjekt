<?php

function queryMysql($query)
{
  global $connection;
  $result = $connection->query($query);
  if (!$result) die($connection->error);
  return $result;
}


?>