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

$load_this_date = $_POST['month'];
$load_this_title = $_POST['title'];
$target_details;

$load_this_date = strtolower($load_this_date);
$arry_months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
if(in_array($load_this_date,$arry_months))
{
  $target_details = "SELECT t_title,t_description,t_range_days,t_priority,t_color,t_start_hour,t_end_hour,t_status FROM target_$load_this_date WHERE t_title=$load_this_title";
  $result = $conn->query($target_details);
  if ($result->num_rows == 1)
  {
    $target_details += ":_dasart_:`01`";
    while($row = $result->fetch_assoc())
    {
        $hourz = $row['t_start_hour'] + " -> " + $row['t_end_hour'];
        $target_details += $row["t_title"].":spc:`02`".$row["t_description"].":spc:`03`".$row["t_range_days"].":spc:`04`".$row['t_priority'].":spc:`05`".$row["t_color"].":spc:`06`".$row['t_priority'].":spc:`07`".$hourz.":spc:`08`". $ropw['t_status'].":spc::brr:";
    }
    $target_details += ":_daend_:";
    echo $target_details;
  }
  else
  {

  }
}
else
{
  echo "the parameter date is invalid refresh page";
}


$conn->close();
?>
