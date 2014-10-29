<?php

class router {

	private $registry;


	private $path;

	private $args = array();

	public $file;

	public $controller;

	public $action; 




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
		$this->checklogin();

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



	private function getController() 
	{


		$route = (empty($_GET['rt'])) ? '' : $_GET['rt'];
		include $this->path.'/loginController.php';
		$loginController = new loginController($this->registry);

		if (empty($route))
		{
			$route = 'index';
		}
		else
		{

			$parts = explode('/', $route);
			if(isset($_SESSION['uid']))
			{
				$this->controller = $parts[0];
				if(isset( $parts[1]))
				{
					$this->action = $parts[1];
					$loginController->loggedin();
				}
			}
			else if($parts[0] != 'index')
			{
				$this->controller = 'index';
				$this->action = 'index';
				$loginController->index();
			}
			else
			{
				$this->controller = 'index';
				if(isset( $parts[1]))
				{
					$this->action = $parts[1];
				}
				$loginController->index();
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

	private function checklogin()
	{
		if(isset($_POST['username'])||isset($_POST['password']))
		{
			if(empty($_POST['username']))
			{
				// TODO: error please fill username warning on index page
			}
			else if(empty($_POST['password']))
			{
				// TODO: error please fill password
			}
			if(isset($_POST['username'])&&isset($_POST['password']))
			{
				$passwordcheck = 
			}
		}
	}


}




?>
