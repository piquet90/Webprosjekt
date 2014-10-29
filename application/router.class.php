<?php

class router {

private $registry;


private $path;

private $args = array();

public $file;

public $controller;

public $action; 

public $userid;
public $loginPath;
public $loggedin;


function __construct($registry) 
{
	$this->registry = $registry;
}

function setPath($path) 
{
	if (is_dir($path) == false)
	{
		throw new Exception ('Invalid controller path: `' . $path . '`');
	}

	$this->path = $path;
}


public function loader()
{

	$this->loggedIn();
	$this->logginPath = $this->path.'/login'.'Controller.php';
	include $this->logginPath;
	$loginController = new loginController($this->registry);
	if($this->loggedin == true)
	{
		$loginController->loggedin($this->userid);
	}
	else
	{
		$loginController->index();
	}


	$this->getController();


	if (is_readable($this->file) == false)
	{
		$this->file = $this->path.'/error404.php';
		$this->controller = 'error404';
	}


	include $this->file;


	$class = $this->controller . 'Controller';
	$controller = new $class($this->registry);


	if (is_callable(array($controller, $this->action)) == false)
	{
		$action = 'index';
	}
	else
	{
		$action = $this->action;
	}

	$controller->$action();
}



private function getController() {


	$route = (empty($_GET['rt'])) ? '' : $_GET['rt'];

	if (empty($route))
	{
		$route = 'index';
	}
	else
	{

		$parts = explode('/', $route);
		$this->controller = $parts[0];
		if(isset( $parts[1]))
		{
			$this->action = $parts[1];
		}
	}

	if (empty($this->controller))
	{
		$this->controller = 'index';
	}


	if (empty($this->action))
	{
		$this->action = 'index';
	}

	$this->file = $this->path .'/'. $this->controller . 'Controller.php';
}

private function loggedIn()
{
	$userid = (empty($_SESSION['uid']))?'' : $_SESSION['uid'];

	if(empty($userid))
	{
		$this->loggedin = false;
	}
	else
	{
		$this->loggedin = true;
		$this->userid = $userid;

	}
}


}

?>
