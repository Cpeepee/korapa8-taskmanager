
function on_update_input_for_calender_task(id,val)
{
  if(id == "input_month_on_calender_task")
  {
    val = Number(val);
    switch (val)
    {
      case 1: val="January"; break;
      case 2: val="February"; break;
      case 3: val="March"; break;
      case 4: val="April"; break;
      case 5: val="May"; break;
      case 6: val="June"; break;
      case 7: val="July"; break;
      case 8: val="August"; break;
      case 9: val="September"; break;
      case 10: val="October"; break;
      case 11: val="November"; break;
      case 12: val="December"; break;
      default: val="uknonw";break;
    }
    document.getElementById('show_value_input_month_on_calender_task').innerText = val;
  }
  else
  {
    document.getElementById('show_value_input_day_on_calender_task').innerText = val;
  }
}
// function on_update_input_month_on_calender_task(val)
// {
//   document.getElementById('show_value_input_month_on_calender_task').innerText = val;
// }
function change_am_pm_on_calender_task(val)
{
  if(val == "am_on_calender_task")
  {
    val = "AM";
    document.getElementById('am_on_calender_task').style.width = "40px";
    document.getElementById('am_on_calender_task').style.height = "40px";
    document.getElementById('pm_on_calender_task').style.width = "35px";
    document.getElementById('pm_on_calender_task').style.height = "35px";
  }
  else
  {
    val = "PM";
    document.getElementById('pm_on_calender_task').style.width = "40px";
    document.getElementById('pm_on_calender_task').style.height = "40px";
    document.getElementById('am_on_calender_task').style.width = "35px";
    document.getElementById('am_on_calender_task').style.height = "35px";
  }
  document.getElementById('show_value_am_pm_calender_task').innerText = val;
}

function action_for_button_all_done_calender_task()
{
  var error_fail = false;
  var am_pm = document.getElementById('show_value_am_pm_calender_task').innerText;
  var month = document.getElementById('show_value_input_month_on_calender_task').innerText;
  var day = document.getElementById('show_value_input_day_on_calender_task').innerText;

  if(am_pm == "")
  {
    document.getElementById('error_title_for_button_done_calender').innerText = "Error: ";
    document.getElementById('error_message_for_button_done_calender').innerText = "Please select AM / PM.";
    document.getElementById('switch_am_or_pm_calender_task').style.border = "2px solid red";
    error_fail = true;
  }
  if(day== "")
  {
    document.getElementById('error_title_for_button_done_calender').innerText = "Error: ";
    document.getElementById('error_message_for_button_done_calender').innerText = "Please select day.";
    document.getElementById('show_value_input_day_on_calender_task').innerText = day;
    error_fail = true;
  }

  if(month == "")
  {
    document.getElementById('error_title_for_button_done_calender').innerText = "Error: ";
    document.getElementById('error_message_for_button_done_calender').innerText = "Please select month.";
    error_fail = true;
  }

  if(am_pm == "" && day == "" && month == "")
  {
    document.getElementById('error_title_for_button_done_calender').innerText = "Error: ";
    document.getElementById('error_message_for_button_done_calender').innerText = "Please select month,day,am/pm.";
  }

    if(error_fail == false)
    {
      document.getElementById('error_title_for_button_done_calender').innerText = "";
      document.getElementById('error_message_for_button_done_calender').innerText = "";
      document.getElementById('show_value_from_datE_on_calender_task').innerText = day +" "+month + " " + am_pm;
      document.getElementById('show_value_input_day_on_calender_task').innerText = day;
      document.getElementById('show_value_input_month_on_calender_task').innerText = month;
      document.getElementById('show_value_am_pm_calender_task').innerText = am_pm;
      document.getElementById('switch_am_or_pm_calender_task').style.border = "1px solid white";
      var space="_";
      var res = month + space + day + space + am_pm;
      res = res.toLowerCase();
      document.getElementById('secret_date_calender_task').innerText = res;
      remove_all_childs_from_boxs_by_LADT();
      remove_all_childs_from_respawnbox_by_LADT();
      repeat_to_refresh();
      change_the_title_text_task_by_LADT(am_pm);
      give_me_the_last_task_id();
      setTimeout(ajax_switch_tasks_task(),3000);
      setTimeout(reset_the_page_scroll_by_LADT(),1000);
   }
}
