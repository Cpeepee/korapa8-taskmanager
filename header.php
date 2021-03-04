<?php
require ('convertDate.php');
require ('database/task/make_this_year.php');
date_default_timezone_set('Iran'); $current_month_and_year_name = date('F Y');
?>

<!DOCTYPE html>
<html>
<head>
  <link rel="shortcut icon" href="img/icons/fav.ico">
  <noscript>
        <META HTTP-EQUIV="Refresh" CONTENT="0;URL=noscript.php">s
  </noscript>
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/noselect-zindex-menu.css">
  <link rel="stylesheet" href="css/globalCenterMessage.css">
  <link rel="stylesheet" href="css/loading_processing_page.css">
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
  <script type="text/javascript" src="js/message.js"></script>
  <title></title>
</head>
<body>
  <!-- menu starts-->
  <div id="menu" class="menu_style zindex2">
    <div id="item_0" class="noselect menu_item zindex3">
      <h4 class="noselect menu_item_text"> Dashboard </h4>
      <img id="item_0" class="noselect menu_icon" src="img/icons/home.png" alt="dashboard">
    </div>
    <div id="item_1" class="nomargin noselect menu_item zindex3">
      <h4 class="noselect menu_item_text"> My Targets </h4>
      <img id="item_1" class="noselect menu_icon" src="img/icons/target.png" alt="targets">
    </div>
    <div id="item_2" class="nomargin noselect menu_item zindex3">
      <h4 class="noselect menu_item_text"> My Tasks </h4>
      <img id="item_2" class="noselect menu_icon" src="img/icons/task.png" alt="tasks">
    </div>

    <div id="item_logout" class="nomargin noselect menu_item zindex3">
      <h4 class="noselect menu_item_text"> Logout </h4>
      <img id="item_logout" class="noselect menu_icon" src="img/icons/logout.png" alt="logout">
    </div>
  </div>
  <!-- menu ends -->

  <!-- current date & time starts -->
  <h4 id="header_date" class="noselect zindex0 style_header_date"> <?php date_default_timezone_set('Iran'); echo date('l j F Y H:i:s A') ."<br>" . (json_encode(gregorian_to_jalali($current_year_to_convert_jalali,$current_month_to_covnert_jalali,$current_day_to_covenrt_jalali,$current_week_to_convert_jalali,$current_hours_to_convert_jalali,$current_minuts_to_convert_jalali,$current_secunds_to_convert_jalali,$current_pm_or_am_to_convert_jalali)));//l jS \of F Y H:i:s A was have <br>,?></h4>
  <script> regex_date_jaladi();</script>
  <!-- current date & time ends -->


  <!-- Box message starts -->
  <div id="global_center_message">
    <div id="close_button_gcm"></div>
    <div id="animation_box_gcm">
        <div id="charecter_gcm">
            <div id="eyes_left_gcm"></div>
            <div id="eyes_right_gcm"></div>
            <div id="mouth_angry_gcm"></div>
            <div id="mouth_happy_gcm"></div>
        </div>
        <div id="charecter_show_gcm"></div>
    </div>
      <p id="title_gcm" class="noselect">test!<span class="code_gcm">0000</span></p>
      <p id="message_gcm">this is first message.</p>
      <div id="button_gcm"><span id="text_button_gcm" class="noselect">got it!</span></div>
  </div>
  <div id="larg_button_close_global_center_message_area"> </div>
  <!-- box message ends -->


  <!-- loading/proccessing message starts-->
  <div id='loading_or_processing_message' style='position:fixed;z-index:10;height:100%;width:100%;background-color:transparent;visibility:hidden;'>
    <div id="content_loading_processing_message" class='noselect'>
      <br><h1 style="text-align:center;color:white;"> Please wait <br>Loading</h1>
      <p> if you dont have time close it</p>
    </div>
  </div>
  <!-- loading/proccessing message ends -->


  <!-- box feedback starts -->
  <div id="general_feedback"></div>
  <!-- box feedback ends -->
