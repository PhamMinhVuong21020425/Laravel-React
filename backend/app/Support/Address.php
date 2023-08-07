<?php
namespace App\Support;

class Address
{
    public $email;
    public $age;

    public function __construct($email, $age)
    {
        $this->email = $email;
        $this->age = $age;
    }

}