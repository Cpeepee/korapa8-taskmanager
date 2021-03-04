<?php
require ('get_stamp.php');
$servername = "localhost";
$username = "root";
$password = "toor8";
$dbname = "todo3_year_".$t_this_year;

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
{
  die("Connection failed:" . $conn->connect_error);
}

$load_this_date = $_POST['this_date'];
$t_title = $_POST['t_title'];
$t_description = $_POST['t_description'];
$t_start_day = $_POST['t_start_day'];
$t_end_day = $_POST['t_end_day'];
$t_color = '0';
$t_priority = '0';
$t_once_xday = '0';
$t_start_hour = '0';
$t_end_hour = '0';

$t_status = 'exists';
$t_last_modify_time = $t_total_time_info;
$t_last_status_time = '0';

$newdata = "INSERT INTO target_".$load_this_date. " (t_title,t_description,t_color,t_priority,t_start_day,t_end_day,t_once_every_xday,t_start_hour,t_end_hour,t_status,t_last_modify_time,t_last_status_time) VALUES ('$t_title','$t_description','$t_color','$t_priority','$t_start_day','$t_end_day','$t_once_xday','$t_start_hour','$t_end_hour','$t_status','$t_last_modify_time','$t_last_status_time')";
if ($conn->query($newdata) === TRUE)
{
  echo "success";
}
else
{
  echo $conn->error;
}


$conn->close();
?>
