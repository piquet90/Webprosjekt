<?php

Class mainController Extends baseController {


	public function index() 
	{
		$this->registry->template->show('main');	
	}

}

?>