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
$t_new_position = $_POST['task_position'];


$t_last_status_time = $t_total_time_info;


$status_id_exists = false;
$sql_search = "SELECT t_id FROM ".$load_this_date. " WHERE t_id='".$t_id."'";
$result_search = $conn->query($sql_search);
if ($result_search->num_rows > 0)
{
  while($row = $result_search->fetch_assoc())
  {
    $status_id_exists=true;
  }
}


if($status_id_exists==true)
{
  $newdata = "UPDATE ".$load_this_date. " SET t_position='".$t_new_position."', t_last_modify_time='".$t_last_status_time."' WHERE t_id=".$t_id;
  if ($conn->query($newdata) === true)
  {
    echo "success";
  }
  else
  {
    echo $newdata . "<br>" . $conn->error;
  }
}
else
{
  echo "a task with this id isn't exists\nplease refresh the page";
}



$conn->close();
?>
