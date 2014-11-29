<?php


// include mvc classes
include __SITE_PATH . '/application/' . 'controller_base.class.php';
include __SITE_PATH . '/application/' . 'registry.class.php';
include __SITE_PATH . '/application/' . 'router.class.php';
include __SITE_PATH . '/application/' . 'template.class.php';
include __SITE_PATH . '/includes/' . 'functions.php';




$registry = new registry();

// connect to db
require_once __SITE_PATH.'/includes/'.'db_login.php';
$connection = new mysqli($db_host, $db_username, $db_password, $db_database);
if ($connection->connect_error) exit($connection->connect_error);
unset($db_password);




?>
