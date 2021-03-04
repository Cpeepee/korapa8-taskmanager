
<?php
require ("header.php");
?>
<header>
	<link rel="stylesheet" href="css/task.css">
	<link rel="stylesheet" href="css/target.css">
	<!-- <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet"> -->
	<script type="text/javascript" src="js/canvasjs.js"></script>
	<script type="text/javascript" src="js/target.js"></script>
	<script type="text/javascript" src='js/calendar_manager_on_target.js'></script>
</header>
<?php
			// require ('get_stamp.php');
			$servername = "localhost";
			$username = "root";
			$password = "toor8";
			$dbname = "todo3_year_".date('Y');
			$cuddent_month_for_calendar_target = date('F');

			$conn = new mysqli($servername, $username, $password, $dbname);
			if ($conn->connect_error)
			{
			  die("Connection failed: " . $conn->connect_error);
			}

			$load_this_date = strtolower(date('F')); //later change this for switch month on targets! and change the select down line target_table! is like this


			$last_task_id = 0;
			$sql_search = "SELECT COUNT(*) AS lastid FROM target_".$load_this_date;
			$result_search = $conn->query($sql_search);
			if ($result_search->num_rows > 0)
			{
			  while($row = $result_search->fetch_assoc())
			  {
			    $last_task_id=$row['lastid'];
			  }
			}
			$data_range_current_month = array();

			function removethe_things_from_the_title($inx)
			{
					$inx = str_replace('~e','',$inx);
					$inx = str_replace('~bs','\\',$inx);
					$inx = str_replace('~c','\'',$inx);
					$inx = str_replace('~dc','\"',$inx);
					$inx = str_replace('~a','\&',$inx);
					$inx = str_replace('~a','&',$inx);
					$inx = str_replace('~p','\+',$inx);
					$inx = str_replace('~p','+',$inx);
					$inx = str_replace('~q','\:',$inx);
					$inx = str_replace('~q',':',$inx);
					return $inx;
			}
				$sql = "SELECT t_title, t_start_day, t_end_day FROM target_".strtolower(date('F')). " WHERE t_status='exists'";
				$result = $conn->query($sql);
			  if ($result->num_rows > 0)
			  {
			    while($row = $result->fetch_assoc())
			    {
							$title_without_things = removethe_things_from_the_title($row['t_title']);
							array_push($data_range_current_month,array("label"=> $title_without_things, "y"=> array($row["t_start_day"],$row['t_end_day'])));
			    }
			  }
			  else
			  {
			    echo "0 results";
			  }
			$conn->close();
?>

<div class="noselect zindex1 main_base_form">
    <div id="chartContainer_range_current_month" style="position:relative;margin:auto;height:100%;width:100%;"></div>
</div>

<script> load_chart_target(<?php echo json_encode($data_range_current_month, JSON_NUMERIC_CHECK);?>,<?php echo json_encode($current_month_and_year_name);?>);</script>
<h2 class="noselect zindex1 style_header_text"> My Targets </h2>



<div id="delete_the_target" class="noselect zindex2">
	<h4 class="menu_item_text_toolbox_task"> Delete Target</h4>
	<img class="noselect menu_icon" src="img/icons/toolbox_delete_target.png" alt="delete">
	<div class="line_toolbar_delete_target"></div>
	<div id="box_main_toolbox_delete_target" style="visibility:hidden;">
		<!-- more code need -->
	</div>
</div>

<div id="toolbar_create_only_target" class="noselect zindex2">
	<h4 class="menu_item_text_toolbox_task"> Create Single Target</h4>
  <img class="noselect menu_icon" src="img/icons/toolbox_only_target.png" alt="only">
  <div class="line_toolbar_only_target"></div>
  <div id="box_main_toolbox_only_target" style="visibility:hidden;">
	    <label class="label_input_for_new_item_task" style="margin-top:8%;">Title:</label><input id="input_text_target_only_from_target" type="text" class="style_input_text_for_new_item_task" maxlength="15">
	    <div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:32.5px;" onclick="document.getElementById('input_text_target_only_from_target').value = ''"></div>
	    <label class="label_input_for_new_item_task" style="margin-top:20%;">Description:</label><textarea rows="5" cols="60" id="input_description_target_only_from_target" type="text" class="style_input_description_for_new_item_task" maxlength="150"></textarea>
	    <div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:80px;" onclick="document.getElementById('input_description_target_only_from_target').value = ''"></div>
			<label class="LabelStartEndDayQuickOnTarget" style="margin-left:50px;margin-top:205px;">Start day: <span id="show_value_input_start_day_on_only_target_from_target">x</span></label>
			<input id="input_start_day_on_only_target_from_target" class="style_input_range_start_and_end_day_on_quick_task_target" type="range"  style="margin-top:235px;margin-left: 50px;" min="1" max="30" value="1" onchange="event_onchange_range_start_end_only_target_from_target()">
			<script>update_showValue_for_first_load_quick_target_task('show_value_input_start_day_on_only_target_from_target','input_start_day_on_only_target_from_target');</script>
			<label class="LabelStartEndDayQuickOnTarget" style="margin-left:245px;margin-top:205px;">End day: <span id="show_value_input_end_day_on_only_target_from_target">x</span></label>
			<input id="input_end_day_on_only_target_from_target" class="style_input_range_start_and_end_day_on_quick_task_target" type="range"  style="margin-top:235px;margin-left: 245px;" min="1" max="31" value="15" onchange="event_onchange_range_start_end_only_target_from_target()">
			<script>update_showValue_for_first_load_quick_target_task('show_value_input_end_day_on_only_target_from_target','input_end_day_on_only_target_from_target');</script>
			<div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:205px;" onclick="document.getElementById('input_start_day_on_only_target_from_target').value='1';document.getElementById('input_end_day_on_only_target_from_target').value='15';update_showValue_for_first_load_quick_target_task('show_value_input_start_day_on_only_target_from_target','input_start_day_on_only_target_from_target');update_showValue_for_first_load_quick_target_task('show_value_input_end_day_on_only_target_from_target','input_end_day_on_only_target_from_target');"></div>
			<div id="button_create_only_target_from_only_target" onclick="create_only_target_from_target()" class="noselect"><span class="noselect text_button_create_item">Add</span></div>
	</div>
</div>



<div id="toolbar_target" class="noselect zindex2">
  <h4 class="menu_item_text_toolbox_task"> Create Target & Quick Task</h4>
  <img class="noselect menu_icon" src="img/icons/toolbox.png" alt="quick">
  <div class="line_toolbar_task"></div>
  <div id="box_main_toolbox_target" style="visibility:hidden;">
    <label class="label_input_for_new_item_task" style="margin-top:8%;">Title:</label><input id="input_text_for_new_item_task" type="text" class="style_input_text_for_new_item_task" maxlength="15">
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
		<!-- the calendar -->
		<div id="main_box" style="width:300px;height:275px;background-color:transparent;position:absolute;margin-top:270px;margin-left:60px;">
        <div id="header_title_idk">
          <center><h1 class="noselect" style="font-family:theRemachinescriptFont;color:#FF6B6B;font-size:45px;"><span id="previous-month-calendar-on-target"><</span> <span id='text-month-calendar-on-target'><?php echo $cuddent_month_for_calendar_target;?></span> <span id="next-month-calendar-on-target">></span></h1></center>
        </div>
        <div id="base_numbers" style="margin-left:-25px;background-color:transparent;margin-top:-20px;"><!-- FF6B6B -->
          <?php
          $margin_left = 0; $margin_top = 0;
          // $margin_left_connection_line = 66.5; $margin_top_connection_line = 9;
            for($f=01;$f<=31;$f++)
            {
              $margin_left+=4; $padding_left_number_text=0;
              if($f <= 9)
                $padding_left_number_text=7;
              else
                $padding_left_number_text=2;
              if($f%7==0)
              {
                ?>
                <div id="calendar_number_on_target_<?php echo $f;?>" style="z-index:1;position:absolute;width:25px;height:25px;background-color:transparent;border:0.5px solid rgba(255, 107, 107,1);border-radius:15px;
                margin-top:<?php echo $margin_top;?>px;margin-left:<?php echo $margin_left;?>0px;">
                <span id="calendar_text_number_on_target_<?php echo $f;?>" class="noselect" style="position: absolute;font-style:Nerko One;color:#FF6B6B;padding-top:3px;padding-left:<?php echo $padding_left_number_text;?>px;text-align:center;font-weight:bold;background-color:transparent;"><?php echo $f; ?></span> </div>
                <br>
                <?php
                $margin_left = 0; $margin_top += 20;
              }
              else
              {
                ?>
                <div id="calendar_number_on_target_<?php echo $f;?>" style="z-index: 1;position:absolute;width:25px;height:25px;background-color:transparent;border:0.5px solid rgba(255, 107, 107,1);border-radius:15px;
                margin-top:<?php echo $margin_top;?>px;margin-left:<?php echo $margin_left;?>0px;">
                <span id="calendar_text_number_on_target_<?php echo $f;?>" class="noselect" style="border-radius:5px;position: absolute;font-style:Nerko One;color:#FF6B6B;padding-top:3px;padding-left:<?php echo $padding_left_number_text;?>px;text-align:center;font-weight:bold;background-color:transparent;"><?php echo $f; ?></span> </div>
                <?php
              }
            }
            ?>
            <script>
            function i_want_select_unselect_everydays_on_calendar_target()
            {
              var u =$('#checkbox_sel_unsel_days_target').is(":checked");
              var itscolor = [];
              if(u == false || u == 0){itscolor[0] = 'transparent';itscolor[1] = '#FF6B6B';$('#label_checkalldays_target').text('Check All');}
              else {itscolor[0] = 'rgba(255,48,48,0.5)';itscolor[1] = 'white';$('#label_checkalldays_target').text('Uncheck All');}
              for(var i=1;i<=31;i++) {$('#calendar_number_on_target_'+i).css('background-color',itscolor[0]);$('#calendar_text_number_on_target_'+i).css('color',itscolor[1]);}
            }
            </script>
            <input id="checkbox_sel_unsel_days_target" type="checkbox" style='margin-left:200px;margin-top:85px;' onchange='i_want_select_unselect_everydays_on_calendar_target()'><label id="label_checkalldays_target" class='noselect' style='color:white;'>Check All</label>
            <script>
							  var uawafjifew =$('#checkbox_sel_unsel_days_target').is(":checked");
                if(uawafjifew==false){$('#label_checkalldays_target').text('Check All');i_want_select_unselect_everydays_on_calendar_target();}
                else{$('#label_checkalldays_target').text('Uncheck All');i_want_select_unselect_everydays_on_calendar_target();}
            </script>
          </div>
    </div>
		<!-- the calendar end-->

		<label class="LabelStartEndDayQuickOnTarget" style="margin-left:50px;margin-top:560px;">Start Hour: <span id="show_value_input_start_hour_on_quick_target_and_task">x</span></label>
		<input id="input_start_hour_on_quick_target_and_task" class="style_input_range_start_and_end_day_on_quick_task_target" type="range"  style="margin-top:580px;margin-left: 50px;" min="1" max="24" value="1" onchange="event_onchange_range_hour_quick_target_task()">
		<script>update_showValue_for_first_load_quick_target_task('show_value_input_start_hour_on_quick_target_and_task','input_start_hour_on_quick_target_and_task');</script>
		<label class="LabelStartEndDayQuickOnTarget" style="margin-left:245px;margin-top:560px;">End Hour: <span id="show_value_input_end_hour_on_quick_target_and_task">x</span></label>
		<input id="input_end_hour_on_quick_target_and_task" class="style_input_range_start_and_end_day_on_quick_task_target" type="range"  style="margin-top:580px;margin-left: 245px;" min="1" max="25" value="6" onchange="event_onchange_range_hour_quick_target_task()">
		<script>update_showValue_for_first_load_quick_target_task('show_value_input_end_hour_on_quick_target_and_task','input_end_hour_on_quick_target_and_task');</script>
		<div class="button_empty_title_input_create_task" style="margin-left:370px;margin-top:560px;" onclick="document.getElementById('input_start_hour_on_quick_target_and_task').value='1';document.getElementById('input_end_hour_on_quick_target_and_task').value='15';update_showValue_for_first_load_quick_target_task('show_value_input_start_hour_on_quick_target_and_task','input_start_hour_on_quick_target_and_task');update_showValue_for_first_load_quick_target_task('show_value_input_end_hour_on_quick_target_and_task','input_end_hour_on_quick_target_and_task');"></div>
    <div id="button_clear_inputs_item_task" onclick="clear_inputs_quick_target_task()" class="noselect style_button_clear_item_new_quick_target_task"><span class="noselect text_button_create_item_new_task">Clear</span></div>
    <div id="button_create_item_task" onclick="create_inputs_quick_target_task()" class="noselect style_button_create_item"><span class="noselect text_button_create_item">Add</span></div>
  </div>
</div>


<?php
include ("footer.php");
?>
