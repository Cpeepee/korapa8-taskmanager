/*
  note:responisve on 984*960 is ok.
  remove the target and tasks mades!!
*/

function update_showValue_for_first_load_quick_target_task(showw,valuee)
{
  document.getElementById(showw).innerText = document.getElementById(valuee).value;
}


function event_onchange_range_start_end_only_target_from_target()
{
  var starts = document.getElementById('input_start_day_on_only_target_from_target').value;
  var ends = document.getElementById('input_end_day_on_only_target_from_target').value;
  starts = Number(starts);
  ends = Number(ends);
  if(starts > ends || starts == ends)
  {
    ends=starts+1;
    document.getElementById('input_end_day_on_only_target_from_target').value = ends;
  }
  document.getElementById('show_value_input_start_day_on_only_target_from_target').innerText = starts;
  document.getElementById('show_value_input_end_day_on_only_target_from_target').innerText = ends;
}
function event_onchange_range_start_end_quick_target_task()
{
    var starts = document.getElementById('input_start_day_on_quick_target_and_task').value;
    var ends = document.getElementById('input_end_day_on_quick_target_and_task').value;
    starts = Number(starts);
    ends = Number(ends);
    if(starts > ends || starts == ends)
    {
      ends=starts+1;
      document.getElementById('input_end_day_on_quick_target_and_task').value = ends;
    }
    document.getElementById('show_value_input_start_day_on_quick_target_and_task').innerText = starts;
    document.getElementById('show_value_input_end_day_on_quick_target_and_task').innerText = ends;
}

function event_onchange_range_hour_quick_target_task()
{
  var starts = document.getElementById('input_start_hour_on_quick_target_and_task').value;
  var ends = document.getElementById('input_end_hour_on_quick_target_and_task').value;
  starts = Number(starts);
  ends = Number(ends);
  if(starts > ends || starts == ends)
  {
    ends=starts+1;
    document.getElementById('input_end_hour_on_quick_target_and_task').value = ends;
  }
  document.getElementById('show_value_input_start_hour_on_quick_target_and_task').innerText = starts;
  document.getElementById('show_value_input_end_hour_on_quick_target_and_task').innerText = ends;
}

function event_onchange_range_once_every_x_days_quick_target_task()
{
  (document.getElementById('input_once_everyXday_on_quick_target_and_task').value==0)?document.getElementById('show_value_input_once_everyXday_on_quick_target_and_task').innerText = ''  : update_showValue_for_first_load_quick_target_task('show_value_input_once_everyXday_on_quick_target_and_task','input_once_everyXday_on_quick_target_and_task');
}

function clear_inputs_quick_target_task()
{
  document.getElementById('input_text_for_new_item_task').value = '';
  document.getElementById('input_description_for_new_item_task').value = '';
  reset_the_priority_value_on_task();
  document.getElementById('input_color_for_new_item_task').value ='#ffffff';
  document.getElementById('input_start_hour_on_quick_target_and_task').value='1';document.getElementById('input_end_hour_on_quick_target_and_task').value='15';update_showValue_for_first_load_quick_target_task('show_value_input_start_hour_on_quick_target_and_task','input_start_hour_on_quick_target_and_task');update_showValue_for_first_load_quick_target_task('show_value_input_end_hour_on_quick_target_and_task','input_end_hour_on_quick_target_and_task');
  //probably reset the calendar on target quick later..
}

function check_last_date_calender_quick_target_task()
{
   var this_month_text = $('#text-month-calendar-on-target').text();
   this_month_text = stop_sqlinjection_target(this_month_text,1);
   this_month_text = this_month_text.toLowerCase();
   return this_month_text;
}


function stop_sqlinjection_target(inputt,status_code)
{
  inputt = inputt.toString();
  switch(status_code)
  {
    //1 for date.
    //2 for just number
    //3 for color #and number
    case 1: inputt = inputt.replace(/[\!\@\#\$\%\^\&\*\(\)\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, ''); break;
    case 2: inputt = inputt.replace(/[a-zA-Z \#\!\@\$\%\^\&\*\(\)\_\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, ''); break;
    case 3: inputt = inputt.replace(/[\!\@\$\%\^\&\*\(\)\_\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, ''); break;
  }
  return inputt;
}

function ajax_create_quick_target_and_task(title,descrip,color,priority,the_days,starthour,endhour)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    var retry_one_time = 0;
    if(this.readyState == 0)
    {
      if(retry_one_time <= 0)
      {
        retry_one_time++;
        ajax_create_quick_target_and_task(title,descrip,color,priority,the_days,starthour,endhour);
      }
      else
      {
        $('#loading_or_processing_message').css("visibility","hidden");
      }
    }
    if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
    {
      $('#loading_or_processing_message').css("visibility","visible");
    }
    if (this.readyState == 4 && this.status == 200)
    {
      $('#loading_or_processing_message').css("visibility","hidden");
        if(this.responseText == "success")
        {
          // show_success_message("success","All done from Quick target&task request","8004");
          location.reload();
        }
        else
        {
          show_error_message("error",this.responseText,"9010");
        }
    }
  };
  xhttp.open("POST", "actions/target/create_quick_target_task.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  color = stop_sqlinjection_target(color,3);
  priority = stop_sqlinjection_target(priority,2);
  //thedays = stop_sqlinjection_target(the_days,2)
  starthour = stop_sqlinjection_target(starthour,2);
  endhour = stop_sqlinjection_target(endhour,2);
  var dataa= "this_date="+ check_last_date_calender_quick_target_task()+"&t_title="+title+"&t_description="+descrip+"&t_color="+color+"&t_priority="+priority+"&t_the_days="+the_days+"&t_start_hour="+starthour+"&t_end_hour="+endhour;
  xhttp.send(dataa);
}

function ajax_create_only_target_from_target(title,description,start_day,end_day)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    var retry_one_time = 0;
    if(this.readyState == 0)
    {

      if(retry_one_time <= 0)
      {
        retry_one_time++;
        ajax_create_only_target_from_target(title,description,start_day,end_day);
      }
      else
      {
        $('#loading_or_processing_message').css("visibility","hidden");

      }
    }
    if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
    {
      $('#loading_or_processing_message').css("visibility","visible");

    }
    if (this.readyState == 4 && this.status == 200)
    {
      $('#loading_or_processing_message').css("visibility","hidden");
        if(this.responseText == "success")
        {
          // show_success_message("success","All done from Quick target and task request","");
          location.reload();
        }
        else
        {
          show_error_message("error",this.responseText,"9011");
        }
    }
  };
  xhttp.open("POST", "actions/target/create_only_target.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  start_day = stop_sqlinjection_target(start_day,2);
  end_day = stop_sqlinjection_target(end_day,2);
  var dataa= "this_date="+ check_last_date_calender_quick_target_task()+"&t_title="+title+"&t_description="+description+"&t_start_day="+start_day+"&t_end_day="+end_day;
  xhttp.send(dataa);
}

// function ajax_create_new_task_by_quick_target_task(datee,title,description,color,priority,positionn)
// {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function()
//   {
//     var retry_one_time = 0;
//     if(this.readyState == 0)
//     {
//
//       if(retry_one_time <= 0)
//       {
//         retry_one_time++;
//         ajax_create_new_task_by_quick_target_task(datee,title,description,color,priority,positionn);
//       }
//       else
//       {
//         $('#loading_or_processing_message').css("visibility","hidden");
//
//       }
//     }
//     if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
//     {
//       $('#loading_or_processing_message').css("visibility","visible");
//
//     }
//      if (this.readyState == 4 && this.status == 200)
//      {
//        $('#loading_or_processing_message').css("visibility","hidden");
//
//          if(this.responseText == "success")
//          {
//            // show_success_message("success","all done","8000");
//          }
//          else
//          {
//            show_error_message("error",this.responseText,"9000"); // the orginal error is from task.js
//          }
//      }
//   };
//   xhttp.open("POST", "actions/target/create_task_with_range_by_quick_target.php", true);
//   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   var dataa= "this_date="+datee+"&task_title="+title+"&task_description="+description+"&task_color="+color+"&task_priority="+priority+"&task_position="+positionn;
//   xhttp.send(dataa);
// }

function give_the_priority_background_on_quick_target_task(wtype) //1=number and  everyting else=string
{
  var xy1 = document.getElementById('radio_input_for_priority_task_high').style.backgroundColor;
  var xy2 = document.getElementById('radio_input_for_priority_task_normal').style.backgroundColor;
  var xy3 = document.getElementById('radio_input_for_priority_task_low').style.backgroundColor;
  if(wtype=="1" || wtype==1)
  {
    var text_priority_on_task = "";
    if(xy1=="red")
      text_priority_on_task = 3;
    else if(xy2=="yellow")
      text_priority_on_task = 2;
    else if(xy3=="green")
      text_priority_on_task = 1;
    else
      text_priority_on_task = 0;
    return text_priority_on_task;
  }
  else
  {
    var text_priority_on_task = "";
    if(xy1=="red")
      text_priority_on_task = "High";
    else if(xy2=="yellow")
      text_priority_on_task = "Normal";
    else if(xy3=="green")
      text_priority_on_task = "Low";
    else
      text_priority_on_task = "unknow";
    return text_priority_on_task;
  }
}

function replace_system_on_quick_target_task_inputs(texty)
{
  texty = texty.replace("\:","~q"); texty = texty.replace(":","~q");
  texty = texty.replace("\+","~p"); texty = texty.replace("+","~p");
  texty = texty.replace("\&","~a"); texty = texty.replace("&","~a");
  texty = texty.replace("\"","~dc");
  texty = texty.replace("\'","~c");
  texty = texty.replace("\\","~bs");
  texty = texty+"~e";
  return texty;
}

function convert_hour_to_box_for_quick_task_from_target_create(inpot)
{
  inpot = Number(inpot);
  (inpot>=13) ? inpot=inpot-12: inpot=inpot;
  var prefix_name = "box";
  prefix_name = prefix_name + inpot;
  (inpot>12) ? prefix_name="problem": prefix_name=prefix_name;
  return prefix_name;
}

function checkout_all_day_numbers_and_month_from_calendar_on_target()
{
    const elements_static_id = '#calendar_number_on_target_';
    var the_month_days_selected = [];
    for(var ss=1;ss<=31;ss++)
    {
        var element_background = $(elements_static_id+ss).css('background-color');
        if(element_background == 'rgba(255, 48, 48, 0.5)' || element_background=='#973033')
            the_month_days_selected.push(ss);
    }
    return the_month_days_selected;
}

function create_inputs_quick_target_task()
{
  var texty= document.getElementById('input_text_for_new_item_task').value;
  var descriptiony=document.getElementById('input_description_for_new_item_task').value;
  var colory=document.getElementById('input_color_for_new_item_task').value;
  var start_hour=document.getElementById('input_start_hour_on_quick_target_and_task').value;
  var end_hour=document.getElementById('input_end_hour_on_quick_target_and_task').value;

  var current_month_text = $('#text-month-calendar-on-target').text();
  const my_months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  if(texty.length < 1)
      show_error_message("error","Please Fill title","9004");
  else if(texty.length > 59)
      show_error_message("error","The title task is more than 59 charecter","9006");
  else if(my_months.indexOf(current_month_text) == -1)
    show_error_message('error','the selected month is not correct!\nplease check calendar month','9013');
  else
  {
    var the_days = checkout_all_day_numbers_and_month_from_calendar_on_target();
    if(the_days.length<=0)
       show_error_message('error','No day has been chosen to build \nthis target and task','9012')
    else
    {
      pick_color_from_prioirty(colory,give_the_priority_background_on_quick_target_task(1));
      colory=document.getElementById('input_color_for_new_item_task').value;
      texty = replace_system_on_quick_target_task_inputs(texty);
      descriptiony = replace_system_on_quick_target_task_inputs(descriptiony);
      ajax_create_quick_target_and_task(texty,descriptiony,colory,give_the_priority_background_on_quick_target_task(1),the_days,start_hour,end_hour);
    }
  }
}


function create_only_target_from_target()
{
  var title = document.getElementById('input_text_target_only_from_target').value;
  var description = document.getElementById('input_description_target_only_from_target').value;
  var start_day = document.getElementById('input_start_day_on_only_target_from_target').value;
  var end_day = document.getElementById('input_end_day_on_only_target_from_target').value;
  title = replace_system_on_quick_target_task_inputs(title);
  description = replace_system_on_quick_target_task_inputs(description);
  ajax_create_only_target_from_target(title,description,start_day,end_day);
  document.getElementById('input_text_target_only_from_target').value = '';
  document.getElementById('input_description_target_only_from_target').value = '';
  document.getElementById('input_start_day_on_only_target_from_target').value = 1;
  document.getElementById('input_end_day_on_only_target_from_target').value = 15;
}





function pick_color_from_prioirty(colory,text_priority_on_task)
{
  if(colory == '#474646' || colory == '#6ab722' || colory == '#c09906' || colory == "#b73622" || colory == "#ffffff")
  {
      switch (text_priority_on_task)
      {
        case 0: colory = '#474646'; break;
        case 1: colory = '#6ab722' ; break;
        case 2: colory = '#c09906' ; break;
        case 3: colory = '#b73622' ; break;
        default: colory = '#000000'; break;
      }
      document.getElementById('input_color_for_new_item_task').value = colory;
  }
}
