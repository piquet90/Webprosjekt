<?php

Class minigameController Extends baseController {



	public function index() 
	{

		$this->registry->template->game1 = makePath("minigame/game1");
		$this->registry->template->game2 = makePath("minigame/game2");

		$this->registry->template->show('minigame');
	}


	public function game1()
	{

		$this->registry->template->show('game1');

	}

	public function game2()
	{

		$this->registry->template->show('game2');

	}

}

?>
