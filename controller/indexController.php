<?php // indexController.php

Class indexController Extends baseController {


    public function register()
    {
    	$this->registry->template->appname = 'Silicon Valley Startup';
    	$this->registry->template->loginpath = makePath('index/index');
        $this->registry->template->registerpath = makePath('index/register');
        $this->registry->template->registererror = "";

        if(isset($_POST['firstname'])||isset($_POST['lastname'])||isset($_POST['username'])||isset($_POST['email'])||isset($_POST['password1'])||isset($_POST['password2']))
        {
            $firstname = strtolower(sanitizeString($_POST['firstname']));
            $lastname = strtolower(sanitizeString($_POST['lastname']));
            $username = strtolower(sanitizeString($_POST['username']));
            $email = strtolower(sanitizeString($_POST['email']));
            $password1 = sanitizeString($_POST['password1']);
            $password2 = sanitizeString($_POST['password2']);


            $register = $this->registerUser($firstname, $lastname, $username, $email, $password1, $password2);

            if($register == true)
            {

            }
            else
            {
                $this->registry->template->show('register');
            }
        }
        else
        { 
    	   $this->registry->template->show('register');
        }

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

    private function registerUser($firstname, $lastname, $username, $email, $password1, $password2)
    {
        //validate firstname
        if(empty($username))
        {
            $this->registry->template->registererror = "Firstname is empty";
            return false;
        }

        //validate lastname
        if(empty($lastname))
        {
            $this->registry->template->registererror = "Lastname is empty";
            return false;
        }

        //validate username
        if(!empty($username))
        {
            // check is exists
            $query = "SELECT * FROM users WHERE username='$username'";
            $result = queryMysql($query);
            $rows = $result->num_rows;

            if($rows>0)
            {
                $this->registry->template->registererror = "Username is taken";
                return false;
            }

        }
        else
        {
            $this->registry->template->registererror = "Username is empty";
            return false;
        }

        //validate email
        if(empty($email))
        {
            $this->registry->template->registererror = "Email is empty";
            return false;
        }
        else if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $this->registry->template->registererror = "Email is unvalid";
            return false;
        }
        else
        {
            $query = "SELECT * FROM users WHERE email='$email'";
            $result = queryMysql($query);
            $rows = $result->num_rows;

            if($rows>0)
            {
                $this->registry->template->registererror = "Already an account with this email";
                return false;
            }
        }

        //validate passwords
        if(empty($password1) || empty($password2))
        {
            $this->registry->template->registererror = "One of the passwords fields is empty";
            return false;
        }
        else if($password1 != $password2)
        {
            $this->registry->template->registererror = "Passwords dont match";
            return false;
        }
        else
        {
            $password = hash('ripemd128', $password1);
        }

        $saldo = '1000';
        $xp = '1';
        $hwlevel = '1';
        $coid = 'Solo Developer';

        $query = "INSERT INTO users (username, password, fornavn, etternavn, email, saldo, xp, hwlevel, coid) VALUES ('$username', '$password', '$firstname', '$lastname', '$email', '$saldo', '$xp', '$hwlevel', '$coid')";
        $result = queryMysql($query);

        return true;

    }

}

?>
