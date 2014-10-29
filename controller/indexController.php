<?php

Class indexController Extends baseController {


public function register()
{
	$this->registry->template->appname = 'Silicon Valley Startup';
	
	$this->registry->template->show('register');
}

public function index() {

        $this->registry->template->appname = 'Silicon Valley Startup';
        $this->registry->template->user = '';
        $this->registry->template->error = '';

        $this->registry->template->registerpath = '';
        $this->registry->template->forgotpath = '';

        $this->registry->template->show('index');
}

}

?>
