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

$t_title = $_POST['task_title'];
$t_description = $_POST['task_description'];
$t_color = $_POST['task_color'];
$t_priority = $_POST['task_priority'];
$t_amount = $_POST['task_amount'];

$tt_title = str_replace("'","\'",$t_title);
$tt_description = str_replace("'","\'",$t_description);

$t_position = 'respawn_items_for_task';
$t_status = 'exists';
$t_last_modify_time = $t_total_time_info;
$t_last_status_time = '+0';

$succes_rounds = 0;
$total_rounds=0;
$error_rounds=0;
$newdata = "INSERT INTO ".$load_this_date. " (t_title,t_description,t_color,t_priority,t_position,t_status,t_last_modify_time,t_last_status_time) VALUES ('$tt_title','$tt_description','$t_color','$t_priority','$t_position','$t_status','$t_last_modify_time','$t_last_status_time')";
for($ia=1;$ia<=$t_amount;$ia++)
{
  $total_rounds++;
  if ($conn->query($newdata) === TRUE)
    $succes_rounds++;
  else
    $error_rounds++;
}

if($total_rounds == $succes_rounds)
  echo 'success';
else
  echo $conn->error;//echo "Error: " . $newdata . "<br>" . $conn->error;


$conn->close();
?>
