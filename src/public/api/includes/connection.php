<?php

//$mysqli = new mysqli('server122.web-hosting.com', 'idigqjcn', 'CYXWhX2Vm9ef', 'idigqjcn_cdmts');

$mysqli = new mysqli('localhost', 'root', 'root', 'launidad2013');

if($mysqli->connect_error){
    die('Error en la conexión' .$mysqli->connect_error);
}
?>