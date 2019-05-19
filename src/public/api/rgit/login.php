<?php

require '../includes/connection.php'; 

    $dataArray = $_POST['data'];
    
    if($_POST['data']){
        
        $data = json_decode($dataArray, true);
        
        $username = $data['username'];
        $password = $data['password'];

        $sql = "SELECT * FROM users WHERE username = '$username' and password = '$password'";
        $resultado = $mysqli->query($sql);

        while($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
            $username_user = $row['username'];
            $password_user = $row['password'];
            $nivel = $row['nivel'];
        }
        
        if($username == $username_user AND $password == $password_user) {
            $user = "{"."\""."username"."\""." : ". "\"".$username."\", " . "\"" . "nivel" ."\""." : ". "\"".$nivel."\"}";
            
            echo $user;
        }
    }
?>