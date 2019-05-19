<?php

require '../includes/connection.php'; 

    $dataArray = $_POST['data'];
    
    if($_POST['data']){
        
        $data = json_decode($dataArray, true);
        
        $email = $data['email'];
        

        $sql = "SELECT * FROM users WHERE email = '$email'";
        $resultado = $mysqli->query($sql);

        while($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
            $email_user = $row['email'];
            $nivel = $row['nivel'];
        }
        
        if($email == $email_user) {
            
        }else{
            echo "nada";
        }
    }
?>