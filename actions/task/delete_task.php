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


    function pick_numbers_from_task_ids_input($global_days)
    {
      $global_days = str_replace('item','',$global_days);
      $global_days = $global_days.','; // , for 31
      $my_answer = array();
      $otherLetters = $global_days;
      $number;
      for($g=0;$g<=strlen($global_days);$g++)
      {
         $number = strstr($otherLetters, ',' ,true);
         if($number != 0)
           array_push($my_answer,(int)$number);
         $otherLetters = strstr($otherLetters,',');
         $otherLetters = substr($otherLetters, 1);
      }
      return $my_answer;
    }


$load_this_date = $_POST['this_date'];
$t_id = $_POST['task_id'];
$t_status = 'deleted';
$t_last_status_time = $t_total_time_info;

$t_id_range = pick_numbers_from_task_ids_input($t_id);

if(sizeof($t_id_range) != -1)
{
  $errors_round=0; $success_round=0; $total_round=0;
  for($xi=0;$xi<=sizeof($t_id_range)-1;$xi++)
  {
    $total_round++;
    $newdata = "UPDATE ".$load_this_date. " SET t_status='".$t_status."', t_last_status_time='".$t_last_status_time."' WHERE t_id=".$t_id_range[$xi];
    if ($conn->query($newdata) === true)
      $success_round++;
    else
      $errors_round++;
  }
}
else
  echo 'the invalid to delete';


if($success_round == $total_round)
    echo "success";
else
    echo $conn->error;





$conn->close();
?>
