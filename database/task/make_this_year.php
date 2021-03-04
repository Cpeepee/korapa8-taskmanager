<?php
ignore_user_abort(false);
function create_database_for_this_year($yearr)
{
  $servername = "localhost";
  $username = "root";
  $password = "toor8";
  $conn = new mysqli($servername, $username, $password);
  if ($conn->connect_error)
    die("Connection failed: " . $conn->connect_error);
  $create_database = "CREATE DATABASE todo3_year_" . $yearr ." CHARACTER SET utf8 COLLATE utf8_persian_ci;"; //IF NOT EXISTS yee2020
  if ($conn->query($create_database) === TRUE)
  {
    echo "sucess";
  }
  else
  {
    echo "error";
  }
  $conn->close();
}

function create_months_to_this_year($yearr)
{
  $servername = "localhost";
  $username = "root";
  $password = "toor8";
  $database = "todo3_year_" . $yearr;
  $conn = new mysqli($servername, $username, $password, $database);
  if ($conn->connect_error)
    die("Connection failed: " . $conn->connect_error);

    $arry_months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    for($a_a=0;$a_a<=11;$a_a++)
    {
        for($a_b=1;$a_b<=31;$a_b++)
        {
          $create_new_table_am ="CREATE TABLE ".$arry_months[$a_a] . "_" . $a_b ."_am (t_id INT AUTO_INCREMENT PRIMARY KEY, t_title varchar(255),t_description varchar(500),t_color varchar(25),t_priority varchar(1),t_position varchar(50),t_status varchar(50),t_last_modify_time varchar(50),t_last_status_time varchar(50)) CHARACTER SET utf8 COLLATE utf8_persian_ci;";
            if ($conn->query($create_new_table_am) === FALSE)
            {
              echo $newdata . "<br>" . $conn->error;
            }

            $create_new_table_pm ="CREATE TABLE ".$arry_months[$a_a] . "_" . $a_b ."_pm (t_id INT AUTO_INCREMENT PRIMARY KEY,t_title varchar(255),t_description varchar(500),t_color varchar(25),t_priority varchar(1),t_position varchar(50),t_status varchar(50),t_last_modify_time varchar(50),t_last_status_time varchar(50)) CHARACTER SET utf8 COLLATE utf8_persian_ci;";
              if ($conn->query($create_new_table_pm) === FALSE)
              {
                echo $newdata . "<br>" . $conn->error;
              }
        }
    }


            // reapir one month
            // for($a_b=1;$a_b<=31;$a_b++)
            // {
            //       $create_new_table_pm ="CREATE TABLE ".$arry_months[9] . "_" . $a_b ."_pm (t_id INT AUTO_INCREMENT PRIMARY KEY,t_title varchar(255),t_description varchar(500),t_color varchar(25),t_priority varchar(1),t_position varchar(50),t_status varchar(50),t_last_modify_time varchar(50),t_last_status_time varchar(50)) CHARACTER SET utf8 COLLATE utf8_persian_ci;";
            //       if ($conn->query($create_new_table_pm) === FALSE)
            //       {
            //         echo $newdata . "<br>" . $conn->error;
            //       }
            // }
  $conn->close();
}
ignore_user_abort(true);
?>
