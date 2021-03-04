<?php
require ('get_stamp.php');
$servername = "localhost";
$username = "root";
$password = "toor8";
$dbname = "todo3_year_".$t_this_year;

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
{
  die("Connection failed: " . $conn->connect_error);
}

$load_this_date = $_POST['this_date'];

$t_id = $_POST['task_id'];

$t_status = 'done';
$t_last_status_time = $t_total_time_info;

$newdata = "UPDATE ".$load_this_date. " SET t_status='".$t_status."', t_last_status_time='".$t_last_status_time."' WHERE t_id=".$t_id;
if ($conn->query($newdata) === true)
{
  echo "success";
}
else
{
  echo $newdata . "<br>" . $conn->error;
}


$conn->close();
?>
