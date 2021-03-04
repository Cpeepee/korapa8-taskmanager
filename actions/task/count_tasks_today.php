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


$last_task_id = 0;
$sql_search = "SELECT COUNT(*) AS lastid FROM ".$load_this_date;
$result_search = $conn->query($sql_search);
if ($result_search->num_rows > 0)
{
  while($row = $result_search->fetch_assoc())
  {
    $last_task_id=$row['lastid'];
  }
}

if($last_task_id==0)
{
  echo $last_task_id;
}
else
{
  echo $last_task_id;
}



$conn->close();
?>
