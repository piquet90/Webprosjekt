<?php

Class indexController Extends baseController {


public function register()
{
	$this->registry->template->appname = 'Silicon Valley Startup';

	$this->registry->template->show('register');
}

public function forgot()
{
	$this->registry->template->show('forgot');
}

public function index() {

    $this->registry->template->appname = 'Silicon Valley Startup';
    $this->registry->template->user = '';
    $this->registry->template->error = '';

    $this->registry->template->registerpath = makePath('index/register');
    $this->registry->template->forgotpath = makePath('index/forgot');

    $this->registry->template->show('index');
}

}

?>
