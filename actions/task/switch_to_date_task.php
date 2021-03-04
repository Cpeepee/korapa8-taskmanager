<?php
require ('get_stamp.php');
function load_item_for_task_via_special_date_by_ajax()
{
  date_default_timezone_set('Iran');
  $t_this_year = date('Y'); $t_this_year = strtolower($t_this_year);

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


  $sql = "SELECT t_id, t_title, t_description, t_color, t_priority, t_position FROM ".$load_this_date. " WHERE t_status='exists' ORDER BY t_priority DESC";
  $result = $conn->query($sql);
  if ($result->num_rows > 0)
  {
    echo ":_dasart_:";
    while($row = $result->fetch_assoc())
    {
        echo $row["t_title"].":spc:".$row["t_description"].":spc:".$row["t_color"].":spc:".$row['t_id'].":spc:".$row["t_position"].":spc:".$row['t_priority'].":spc::brr:";
    }
    echo ":_daend_:";
  }
  else
  {
    //echo "0 results";
    echo "error";
  }
$conn->close();
}
load_item_for_task_via_special_date_by_ajax();
?>
