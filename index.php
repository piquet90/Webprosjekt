<?php

// error reporting on
 error_reporting(E_ALL);

// define sitepath constant
 $site_path = realpath(dirname(__FILE__));
 define ('__SITE_PATH', $site_path);

// include init file
 include 'includes/init.php';

 // make router object
 $registry->router = new router($registry);

 // set controller path
 $registry->router->setPath (__SITE_PATH . '/controller');

// new template object
 $registry->template = new template($registry);

// load controller
 $registry->router->loader();

?>
