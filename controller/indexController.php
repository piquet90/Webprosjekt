<?php

Class indexController Extends baseController {

public function index() {

        $this->registry->template->appname = 'Silicon Valley Startup';
        $this->registry->template->user = '';
        $this->registry->template->error = '';

        $this->registry->template->show('index');
}

}

?>
