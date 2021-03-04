<?php
require ('get_stamp.php');

$servername = "localhost";
$username = "root";
$password = "toor8";
$dbname = "todo3_year_".$t_this_year;

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
  die("Connection failed:" . $conn->connect_error);

$load_this_date = $_POST['this_date'];
$load_this_date = strtolower($load_this_date);

$t_title = $_POST['t_title'];
$t_description = $_POST['t_description'];
$t_color = $_POST['t_color'];
$t_priority = $_POST['t_priority'];
$t_days = $_POST['t_the_days'];
$t_start_hour = $_POST['t_start_hour'];
$t_end_hour = $_POST['t_end_hour'];
$t_status = 'exists';
$t_last_modify_time = $t_total_time_info;
$t_last_status_time = '+0';

function pick_numbers_from_t_days_input($global_days)
{
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

function create_new_range_item_for_task($this_year,$load_this_date,$tt_title,$tt_description,$t_color,$t_priority,$t_position,$t_status,$t_last_modify_time,$t_last_status_time)
{
  $servername = "localhost";
  $username = "root";
  $password = "toor8";
  $dbname = "todo3_year_".$this_year;
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error)
    die("Connection failed:" . $conn->connect_error);

  $newdata = "INSERT INTO ".$load_this_date. " (t_title,t_description,t_color,t_priority,t_position,t_status,t_last_modify_time,t_last_status_time) VALUES ('$tt_title','$tt_description','$t_color','$t_priority','$t_position','$t_status','$t_last_modify_time','$t_last_status_time')";
  $conn->query($newdata);
  $conn->close();
}
function translate_the_bad_words_in_target($inx,$status)
{
  if($status==true || $status == 1)
  {
    $inx = str_replace("\:","~q",$inx);  $inx = str_replace(":","~q",$inx);
    $inx = str_replace("\+","~p",$inx);  $inx = str_replace("+","~p",$inx);
    $inx = str_replace("\&","~a",$inx);  $inx = str_replace("&","~a",$inx);
    $inx = str_replace("\"","~dc",$inx);
    $inx = str_replace("\'","~c",$inx);
    $inx = str_replace("\\","~bs",$inx);//maybe bug!
    // $inx = $inx . "~e";
    return $inx;
  }
  else
  {
    $inx = str_replace("\:","~q",$inx);  $inx = str_replace(":","~q",$inx);
    $inx = str_replace("\+","~p",$inx);  $inx = str_replace("+","~p",$inx);
    $inx = str_replace("\&","~a",$inx);  $inx = str_replace("&","~a",$inx);
    $inx = str_replace("\"","~dc",$inx);
    $inx = str_replace("\'","~c",$inx);
    $inx = str_replace("\\","~bs",$inx);//maybe bug!
    return $inx;
  }
}
function give_me_the_position_for_task($hour)
{
  $hour = (int)$hour; $t_position = '';
  switch ($hour)
  {
    case 1: case 13: $t_position = 'box1'; break;
    case 2: case 14: $t_position = 'box2'; break;
    case 3: case 15: $t_position = 'box3'; break;
    case 4: case 16: $t_position = 'box4'; break;
    case 5: case 17: $t_position = 'box5'; break;
    case 6: case 18: $t_position = 'box6'; break;
    case 7: case 19: $t_position = 'box7'; break;
    case 8: case 20: $t_position = 'box8'; break;
    case 9: case 21: $t_position = 'box9'; break;
    case 10: case 22: $t_position = 'box10'; break;
    case 11: case 23: $t_position = 'box11'; break;
    case 12: case 24: $t_position = 'box12'; break;
    default: $t_position = 'respawn_items_for_task'; break;// if this run maybe something wrong.
  }
  return $t_position;
}


$the_daaaaaaaaaaayz = pick_numbers_from_t_days_input($t_days);
$t_start_day_target = min($the_daaaaaaaaaaayz);
$t_end_day_target = max($the_daaaaaaaaaaayz);
if($t_start_day_target == $t_end_day_target)
{
  if($t_start_day_target == 31)
  {
    $t_end_day_target = $t_start_day_target;
    $t_start_day_target = $t_start_day_target-1;
  }
  else
    $t_end_day_target++;
}

$newdata = "INSERT INTO target_".$load_this_date. " (t_title,t_description,t_color,t_priority,t_start_day,t_end_day,t_start_hour,t_end_hour,t_status,t_last_modify_time,t_last_status_time) VALUES ('$t_title','$t_description','$t_color','$t_priority','$t_start_day_target','$t_end_day_target','$t_start_hour','$t_end_hour','$t_status','$t_last_modify_time','$t_last_status_time')";
if ($conn->query($newdata) === TRUE)
{
  ignore_user_abort(false);
  // $t_title = translate_the_bad_words_in_target($t_title,1);
  // $t_description = translate_the_bad_words_in_target($t_description,1);
  $t_color = translate_the_bad_words_in_target($t_color,0);
  $t_priority = translate_the_bad_words_in_target($t_priority,0);
  // $t_days = translate_the_bad_words_in_target($t_days,0);
  $t_start_hour = translate_the_bad_words_in_target($t_start_hour,0);
  $t_end_hour = translate_the_bad_words_in_target($t_end_hour,0);
  $t_position = ''; //respawn_items_for_task
  $time_zone_light = '';
  for($x=0;$x<=sizeof($the_daaaaaaaaaaayz)-1;$x++)
  {
    $start_h = $t_start_hour;
    $end_h = $t_end_hour;
    for($start_h;$start_h<$end_h;$start_h++)
    {
       $t_position = give_me_the_position_for_task($start_h);
       if($start_h <= 12)
         $time_zone_light = 'am';
       else if($start_h >= 13 && $start_h <= 24)
         $time_zone_light = 'pm';
       else
         $time_zone_light = 'invalid input for timezone';

       if($time_zone_light != 'invalid input for timezone')
          create_new_range_item_for_task($t_this_year,$load_this_date.'_'.$the_daaaaaaaaaaayz[$x].'_'.$time_zone_light,$t_title,$t_description,$t_color,$t_priority,$t_position,$t_status,$t_last_modify_time,$t_last_status_time);
       else
          echo 'invalid input for create_quick_target_task';
    }
  }
  ignore_user_abort(true);
  echo "success";
}
else
   echo $conn->error;
$conn->close();
?>
