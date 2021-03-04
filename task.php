<?php
require ('header.php');
?>
<header>
  <link rel="stylesheet" href="css/task.css">
  <link rel="stylesheet" href="css/calender_switch_task.css">
  <script type="text/javascript" src="js/delete_column_tasks.js"></script>
  <script type="text/javascript" src="js/task.js"></script>
  <script type="text/javascript" src="js/load_another_date_task.js"></script>
</header>
<?php
$load_task_month = date('F');
$load_task_day = date('j');
$load_task_am_pm = date('A');
$load_task_month_number = date('n');

?>
<div id="top_container_task" class="noselect zindex0">
  <h2> My Tasks </h2>
</div>

<div id="base_larg_area_tasks">
  <div id="larg_trash_area" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
  <div id="larg_success_area" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
</div>

<div id="main_box">
  <div id="title_day_task" class="zindex1">
  <?php
  date_default_timezone_set('Iran'); $current_time_is_here_for_automatic_set_title_date_task = date('A');
  if($current_time_is_here_for_automatic_set_title_date_task == "AM" || $current_time_is_here_for_automatic_set_title_date_task == "am")
      $xaa = 1;
  else
      $xaa = 13;
    $xaa_max = $xaa+11;
    $count_for_id_title_day_task_number = 0;
    for($xaa;$xaa<=$xaa_max;$xaa++)
    {
      $count_for_id_title_day_task_number++;
      ?><h3 id="title_day_task_number_<?php echo $count_for_id_title_day_task_number;?>" class="noselect text_title_day_task"> <?php echo $xaa;?></h3><?php
    }
  ?>
  </div>
  <script>header_sticky_task();</script>
  <?php
  for($xa=1;$xa<=12;$xa++)
  {
    ?>
    <div id="box<?php echo $xa;?>" class="style_box" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <?php
  }
  ?>
</div>

<div id="new_items_to_task" class="noselect zindex1">
  <div id="box_tash_task" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="photo_trash_task" src="img/icons/trash-close.png" class="noselect trash_style_task"></div>
  <div id="box_success_task" ondrop="drop(event)" ondragover="allowDrop(event)"><img id="photo_success_task" src="img/icons/task-not-done-dark.png" class="noselect success_style_task"></div>
  <div>
    <div id="button_remove_childerns_respawn_items_on_task" class="zindex1"></div>
    <div id="respawn_items_for_task" class="noselect zindex1"> </div>
  </div>
</div>


<div id="calender_for_task" class="zindex2">
  <h4 class="noselect menu_item_text_toolbox_task"> Switch Date</h4>
  <img class="noselect menu_icon" src="img/icons/calender_task.png" alt="calender">
  <div class="line_calender_task"></div>
  <div id="base_calender_for_task">
      <div id="calendar_on_task">
        <h3  class="noselect style_label_calender_task"> From : <span id="show_value_from_datE_on_calender_task" style="color:lightgreen;"><?php echo $load_task_day . " " . $load_task_month . " " . $load_task_am_pm;?></span></h3>
        <h4 class="noselect style_label_calender_task"> Month :</h4>
        <input id="input_month_on_calender_task" type="range" min="1" max="12" value="<?php echo $load_task_month_number;?>" onchange="on_update_input_for_calender_task(this.id,this.value)">
        <h3 id="pluse_input_month_on_calender_task" style="position:absolute;right:70px;top:174px;color:white;" class="noselect">+</h3>
        <h3 id="mines_input_month_on_calender_task" style="position:absolute;left:95px;top:174px;color:white;" class="noselect">-</h3>
             <h4 class="noselect style_label_calender_task"> Day :</h4>
             <input id="input_day_on_calender_task" type="range" min="1" max="31" value="<?php echo $load_task_day;?>" onchange="on_update_input_for_calender_task(this.id,this.value)">
             <h3 id="pluse_input_day_on_calender_task" style="position:absolute;right:70px;top:260px;color:white;" class="noselect">+</h3>
             <h3 id="mines_input_day_on_calender_task" style="position:absolute;left:95px;top:260px;color:white;" class="noselect">-</h3>
             <div id="switch_am_or_pm_calender_task" class="noselect">
               <img id="am_on_calender_task" src="img/icons/sun30px.png" class="noselect style_icon_am_pm_calender_task" onclick="change_am_pm_on_calender_task(this.id)">
               <img id="pm_on_calender_task" src="img/icons/moon30px.png" class="noselect style_icon_am_pm_calender_task" onclick="change_am_pm_on_calender_task(this.id)">
             </div>
             <h3 class="noselect style_label_calender_task"> To : <span style="color:lightgreen;"><span id="show_value_input_day_on_calender_task"><script>update_the_show_val_forfirst_time_on_calender_task('input_day_on_calender_task','show_value_input_day_on_calender_task');</script></span> <span id="show_value_input_month_on_calender_task"><script>update_the_show_val_forfirst_time_on_calender_task('input_month_on_calender_task','show_value_input_month_on_calender_task'); </script></span> <span id="show_value_am_pm_calender_task"><?php echo " ". $load_task_am_pm;?></span></span></h3>
             <p id="secret_date_calender_task" class="noselect"><?php echo strtolower($load_task_month) . "_" . $load_task_day . "_" . strtolower($load_task_am_pm);?></p>
             <script> give_me_the_last_task_id(); </script>
              <div id="button_all_done_calender_task" onclick="action_for_button_all_done_calender_task()">
                  <span id="text_button_all_done_calender_task" class="noselect style_text_button_done_calender_task">Switch</span>
              </div>
              <p style="color:red;text-align:center;"> <span id="error_title_for_button_done_calender"></span> <span id="error_message_for_button_done_calender"></span></p>
      </div>
  </div>
</div>


<!-- <div id="advice_for_tasks" class="zindex2">
  <h4 class="noselect menu_item_text_toolbox_task"> Suggested Tasks</h4>
  <img class="noselect menu_icon" src="img/icons/advice.png" alt="advice">
  <div class="line_suggested_task"></div>
  <div id="base_advices_to_manage_for_task">
      <div class="style_item_advice_on_base_advice_to_manage_for_task"><div class="circle_for_advice_task" style="background-color:blue;"></div><h4 class="header4_for_advice_task">WASdwa fwaAWF</h4><p class="style_description_for_advice_task">jireogijrgtrtylgelfgtkjhgjtrfed;lkgtwijijhyj<br>giorejiogoreijgiorejgijieorjgreiogjioerjigjeoi</p></div>
  </div>
</div> -->


<div id="toolbar_task" class="noselect zindex2">
  <h4 class="menu_item_text_toolbox_task"> New Task</h4>
  <img class="noselect menu_icon" src="img/icons/toolbox.png" alt="toolbox">
  <div class="line_toolbar_task"></div>
  <div id="box_main_toolbox_task" style="visibility:hidden;">
    <label class="label_input_for_new_item_task" style="margin-top:8%;">Title:</label><input id="input_text_for_new_item_task" type="text" class="style_input_text_for_new_item_task" maxlength="59">
    <div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:32.5px;" onclick="document.getElementById('input_text_for_new_item_task').value = ''"></div>
    <label class="label_input_for_new_item_task" style="margin-top:20%;">Description:</label><textarea rows="5" cols="60" id="input_description_for_new_item_task" type="text" class="style_input_description_for_new_item_task" maxlength="250"></textarea>
    <div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:80px;" onclick="document.getElementById('input_description_for_new_item_task').value = ''"></div>
    <div class="box_priority_tasks">
      <label class="label_input_priority_new_item_task">Priority:</label>
      <div class="parent_of_prioritys_tasks_targets">
          <div id="radio_input_for_priority_task_high" class="radio_input_for_priority_task" style="color:red;border-color:red;"><center>High</center></div>
          <div id="radio_input_for_priority_task_normal" class="radio_input_for_priority_task" style="color:yellow ;border-color:yellow;"><center>Normal</center></div>
          <div id="radio_input_for_priority_task_low" class="radio_input_for_priority_task" style="color:green;border-color:green;"><center>Low</center></div>
      </div>
    </div>
    <div id="button_empty_priority_input_create_task" class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:190px;"></div>
    <label class="label_input_for_new_item_task" style="margin-top:63%;">Custom Color:</label><input id="input_color_for_new_item_task" type="color" class="style_input_color_for_new_item_task" value="#ffffff">
    <div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:240px;" onclick="document.getElementById('input_color_for_new_item_task').value ='#ffffff'"></div>
    <label class="label_input_for_new_item_task" style="margin-top:310px;">Amount:</label><span class="noselect style_minus_amount_new_tasks_on_task">-</span><input id="input_amount_for_new_tasks_on_task" type="text" class="noselect style_input_amount_for_new_tasks_on_task" maxlength="2" value="1"> <span id="pluse_amount_for_new_tasks_on_task" class="noselect style_pluse_amount_new_tasks_on_task">+</span>
    <div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:308px;" onclick="document.getElementById('input_amount_for_new_tasks_on_task').value = '1'"></div>
    <div id="button_clear_inputs_item_task" onclick="clear_inputs_item_task()" class="noselect style_button_clear_item_new_task"><span class="noselect text_button_create_item_new_task">Clear</span></div>
    <div id="button_create_item_task" onclick="create_item_task()" class="noselect style_button_create_item"><span class="noselect text_button_create_item">Add</span></div>
  </div>
</div>


<?php
  function load_item_for_task_by_ajax()
  {
    date_default_timezone_set('Iran');
    $t_this_year = date('Y'); $t_this_year = strtolower($t_this_year);
    $t_this_month = date('F'); $t_this_month = strtolower($t_this_month);
    $t_this_day = date('j'); $t_this_day = strtolower($t_this_day);
    $t_this_light = date('A'); $t_this_light = strtolower($t_this_light);
    $table_target = $t_this_month . "_" . $t_this_day . "_" . $t_this_light;
    $servername = "localhost";
    $username = "root";
    $password = "toor8";
    $dbname = "todo3_year_".$t_this_year;
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error)
      die("Connection failed: " . $conn->connect_error);
    $sql = "SELECT t_id, t_title, t_description, t_color, t_priority, t_position FROM ".$table_target. " WHERE t_status='exists' ORDER BY t_priority DESC";
    $result = $conn->query($sql);
    if ($result->num_rows > 0)
    {
      while($row = $result->fetch_assoc())
      {
        ?>
        <script>load_item_for_task(<?php echo json_encode($row["t_title"]);?>,<?php echo json_encode($row["t_description"]);?>,<?php echo json_encode($row["t_color"]);?>,<?php echo $row['t_id'];?>,<?php echo json_encode($row["t_position"]);?>,<?php echo $row['t_priority'];?>);</script>
        <?php
      }
    }
    else
    {
      //echo "0 results";
    }
  $conn->close();
  }
  load_item_for_task_by_ajax();
?>
<script> check_childnods_respawn_box_task(); </script>
<script> pageScroll_to_down_side(-1500); </script>
<script src="js/calender_manager_on_task.js"> </script>
<?php
include ('footer.php');
?>
