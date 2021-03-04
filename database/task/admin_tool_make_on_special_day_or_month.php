<?php
ignore_user_abort(false);
$servername = "localhost";
$username = "root";
$password = "toor8";
$database = "todo3_year_2020";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error)
  die("Connection failed: " . $conn->connect_error);


        $arry_months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
        // for($a_b=1;$a_b<=31;$a_b++)
        // {
              $create_new_table_pm ="CREATE TABLE ".$arry_months[9] . "_" . 28 ."_pm (t_id INT AUTO_INCREMENT PRIMARY KEY,t_title varchar(255),t_description varchar(500),t_color varchar(25),t_priority varchar(1),t_position varchar(50),t_status varchar(50),t_last_modify_time varchar(50),t_last_status_time varchar(50)) CHARACTER SET utf8 COLLATE utf8_persian_ci;";
              if ($conn->query($create_new_table_pm) === FALSE)
              {
                echo $newdata . "<br>" . $conn->error;
              }
        // }


        ignore_user_abort(true);

?>
