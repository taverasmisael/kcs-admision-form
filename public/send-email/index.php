<?php
require 'vendor/autoload.php';

require 'Classes/MainClass.php';

$mainInstance = new MainClass();

$mainInstance->send($_POST);




