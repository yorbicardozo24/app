<?php

require '../includes/connection.php'; 

    $dataArray = $_POST['data'];

    if($_POST['data']){
        
        $data = json_decode($dataArray, true);
        
        $username = $data['username'];
        

    }
?>