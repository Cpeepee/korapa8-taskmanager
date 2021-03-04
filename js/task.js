//icons from https://icons8.com/icon/pack/business/ios

/*bugs on task.php
{
  check_childnods_respawn_box_task();
  fix the loading / processing mode.. maybe it is not work fine now..
}
*/


//tasks javascript codes starts
var drg,drp;
var last_item_created = 1000;
var space_for_new_row = 125;
var global_item_name = "item";
var name_main_box = "main_box";
var vox1,vox2,vox3,vox4,vox5,vox6,vox7,vox8,vox9,vox10,vox11,vox12,vox13,vox14,vox15,vox16,vox17,vox18,vox19,vox20,vox21,vox22,vox23,vox24;
vox1=vox2=vox3=vox4=vox5=vox6=vox7=vox8=vox9=vox10=vox11=vox12=vox13=vox14=vox15=vox16=vox17=vox18=vox19=vox20=vox21=vox22=vox23=vox24=0;
var text_priority_on_task = "";
var color_priority_on_task = "";



function stopsql_injection_text(input)
{
  input = input.replace("\:","~q"); input = input.replace(":","~q");
  input = input.replace("\+","~p"); input = input.replace("+","~p");
  input = input.replace("\&","~a"); input = input.replace("&","~a");
  input = input.replace("\"","~dc"); input = input.replace("\'","~c");
  input = input.replace("\\","~bs");//bug
  return input;
}

function stopsql_injection_other_inputs(inputt,tonumberr)
{
  if(tonumberr == 1)
  {
    inputt = inputt.replace(/[a-zA-Z \!\@\#\$\%\^\&\*\(\)\_\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, '');
    inputt = Number(inputt);
    document.getElementById('input_amount_for_new_tasks_on_task').value = inputt;
  }
  else if(tonumberr == 2)
  {
    inputt = inputt.replace(/[\!\@\_\$\%\^\&\*\(\)\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, '');
    inputt = inputt.trim();
  }
  else
  {
    inputt = inputt.replace(/[\!\@\#\$\%\^\&\*\(\)\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, '');
    inputt = inputt.trim();
  }
  return inputt;
}


function check_last_date_calender_task()
{
   var thisa = document.getElementById('secret_date_calender_task').innerHTML;
   thisa = stopsql_injection_other_inputs(thisa,false);
   return thisa;
}




function repeat_to_refresh()
{
  for(var xa=1;xa<=12;xa++)
    refresh_the_main_box_height("box"+xa);
}
function refresh_the_main_box_height(box_name)
{
  var c = document.getElementById(box_name).childNodes;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++)
    txt = txt + c[i].nodeName;

  var total_in_this_box = txt.length/3;
  var whos_box = box_name.replace('box','');
  whos_box= Number(whos_box);
  switch (whos_box)
  {
    case 1:vox1=total_in_this_box;break;
    case 2:vox2=total_in_this_box;break;
    case 3:vox3=total_in_this_box;break;
    case 4:vox4=total_in_this_box;break;
    case 5:vox5=total_in_this_box;break;
    case 6:vox6=total_in_this_box;break;
    case 7:vox7=total_in_this_box;break;
    case 8:vox8=total_in_this_box;break;
    case 9:vox9=total_in_this_box;break;
    case 10:vox10=total_in_this_box;break;
    case 11:vox11=total_in_this_box;break;
    case 12:vox12=total_in_this_box;break;
  }
  var finalx = Math.max(vox1,vox2,vox3,vox4,vox5,vox6,vox7,vox8,vox9,vox10,vox11,vox12);
  finalx = ++finalx*space_for_new_row;
  if(finalx >= 200)
    pageScroll_to_down_side(1);
  document.getElementById("main_box").style.height= finalx+"px";
}











function regex_and_make_shapes_for_new_date_on_task_page(input_data)
{
  if(input_data.startsWith(':_dasart_:') && input_data.endsWith(':_daend_:') == true)
  {
    input_data = input_data.replace(":_dasart_:",'');
    input_data = input_data.replace(":_daend_:",'');
    var brr = input_data.match(/:brr:/g);
    for(var j=1;j<=brr.length;j++)
    {
      var x = input_data.search(":brr:");
      var y = x +5;
      var temp_data = input_data.substr(0,y);
      input_data = input_data.substr(y,input_data.length);
      temp_data = temp_data.replace(":brr:","");
      var spc = temp_data.match(/:spc:/g);
      var aroo = ["0","1","2","3","4","5"];
      for(var k=0;k<=spc.length-1;k++) //0-5
      {
        var xx = temp_data.search(":spc:");
        var yy = xx +5;
        aroo [k] = temp_data.substr(0,yy);
        aroo [k] = aroo[k].replace(":spc:","");
        temp_data = temp_data.substr(yy,temp_data.length);
      }
      aroo[3] = Number(aroo[3]);
      load_item_for_task_switched_date(aroo[0],aroo[1],aroo[2],aroo[3],aroo[4],aroo[5]);
    }
    check_childnods_respawn_box_task();
  }
  else
    show_error_message('error',"this data is not standard!\nplease try again to catch data...",'9014');
}















//- - - - - ajax for saving,deleting,updating,creating,etc starts
function ajax_switch_tasks_task()
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
        ajax_switch_tasks_task();
      }
      else
        $('#loading_or_processing_message').css("visibility","hidden");
    }
    if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
      $('#loading_or_processing_message').css("visibility","visible");
    if (this.readyState == 4 && this.status == 200)
    {
      $('#loading_or_processing_message').css("visibility","hidden");
        if(this.responseText == "error")
        {
          //automaticly the counter function said no task found.
        }
        else
          regex_and_make_shapes_for_new_date_on_task_page(this.responseText);
    }
  };
  xhttp.open("POST", "actions/task/switch_to_date_task.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var dataa= "this_date="+ check_last_date_calender_task();
  xhttp.send(dataa);
}

function give_me_the_last_task_id()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
        if(this.responseText == "0")
        {
          show_error_message("oh sorry","No task found.\nIf you want to make one","9005");
          last_item_created= Number(this.responseText);
        }
        else
          last_item_created= Number(this.responseText);
    }
  };
  xhttp.open("POST", "actions/task/count_tasks_today.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var dataa= "this_date="+check_last_date_calender_task();
  xhttp.send(dataa);
}

function ajax_change_position_task(task_id,destination)
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
        ajax_change_position_task(task_id,destination);
      }
      else
        $('#loading_or_processing_message').css("visibility","hidden");
    }
    if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
      $('#loading_or_processing_message').css("visibility","visible");
    if (this.readyState == 4 && this.status == 200)
    {
      $('#loading_or_processing_message').css("visibility","hidden");
        if(this.responseText == "success")
        {
          // show_success_message("success","all done","8003");
        }
        else
          show_error_message("error",this.responseText,"9003");
    }
  };
  xhttp.open("POST", "actions/task/change_position_task.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var cut_id = task_id.replace("item","");
  var dataa= "this_date="+ check_last_date_calender_task()+"&task_id="+cut_id+"&task_position="+destination;
  xhttp.send(dataa);
}

function ajax_create_new_task(title,description,color,priority,amount)
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
        ajax_create_new_task(title,description,color,priority,amount);
      }
      else
        $('#loading_or_processing_message').css("visibility","hidden");
    }
    if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
      $('#loading_or_processing_message').css("visibility","visible");
     if (this.readyState == 4 && this.status == 200)
     {
       $('#loading_or_processing_message').css("visibility","hidden");
         if(this.responseText == "success")
         {
           // show_success_message("success","all done","8000");
           for(var oidk=1;oidk <= amount; oidk++)
              create_item_task_part1();
           reset_color_after_create_new(true);
         }
         else
           show_error_message("error",this.responseText,"9000");
     }
  };
  xhttp.open("POST", "actions/task/create_new_item_task.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  color = stopsql_injection_other_inputs(color,2);
  // priority = stopsql_injection_other_inputs(priority,3);
  var dataa= "this_date="+check_last_date_calender_task()+"&task_title="+title+"&task_description="+description+"&task_color="+color+"&task_priority="+priority+"&task_amount="+amount;
  xhttp.send(dataa);
}


function delete_item_skin_animation(to_del)
{
  to_del.remove();
  document.getElementById('photo_trash_task').src = "img/icons/trash-open.png";
  function change_bgimg()
  {
    document.getElementById('photo_trash_task').src = "img/icons/trash-close.png";
  }
  setTimeout(change_bgimg,550);
  repeat_to_refresh();
}
function ajax_delete_task(task_id,status=false)
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
        ajax_delete_task(task_id);
      }
      else
        $('#loading_or_processing_message').css("visibility","hidden");
    }
    if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
      $('#loading_or_processing_message').css("visibility","visible");
     if (this.readyState == 4 && this.status == 200)
     {
       $('#loading_or_processing_message').css("visibility","hidden");
         if(this.responseText == "success")
         {
           // show_success_message("success","done","8001");
           if(!status)
             delete_item_skin_animation(document.getElementById(task_id));
           else
             for(var ii=0;ii<=task_id.length-1;ii++)
               delete_item_skin_animation(document.getElementById(task_id[ii]));
         }
         else
           show_error_message("error",this.responseText,"9001");
     }
  };
  xhttp.open("POST", "actions/task/delete_task.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var cut_item; var dataa;
  if(status)
    dataa= "this_date="+check_last_date_calender_task()+"&task_id="+task_id;
  else
  {
    cut_item = task_id.replace("item","");
    cut_item = stopsql_injection_text(cut_item);
    dataa= "this_date="+check_last_date_calender_task()+"&task_id="+cut_item;
  }
  xhttp.send(dataa);
}


function ajax_done_task(task_id)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    var retry_one_time = 0;
    if(this.readyState == 0)
    {
      $('#text_loading_or_processing_message').text('The request failed\nplease wait, trying again..');
      if(retry_one_time <= 0)
      {
        retry_one_time++;
        ajax_done_task(task_id);
      }
      else
        $('#loading_or_processing_message').css("visibility","hidden");
    }
    if(this.readyState == 1 || this.readyState == 2 || this.readyState == 3)
      $('#loading_or_processing_message').css("visibility","visible");

     if (this.readyState == 4 && this.status == 200)
     {
       $('#loading_or_processing_message').css("visibility","hidden");
         if(this.responseText == "success")
         {
           var to_success = document.getElementById(task_id);
           to_success.remove();
           document.getElementById('photo_success_task').src = "img/icons/task-done-dark.png";
           function change_bgimg()
           {
             document.getElementById('photo_success_task').src = "img/icons/task-not-done-dark.png";
           }
           setTimeout(change_bgimg,550);
           repeat_to_refresh();
           // show_success_message("success","done","8002");
         }
         else
           show_error_message("error",this.responseText,"9002");
     }
  };
  xhttp.open("POST", "actions/task/done_task.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var cut_item = task_id.replace("item","");
  cut_item = stopsql_injection_text(cut_item);
  var dataa= "this_date="+check_last_date_calender_task()+"&task_id="+cut_item;
  xhttp.send(dataa);
}

// ------------------- code for use ajax via GET portocol starts
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200)
//    {
//      // Response
//      console.log(this.responseText);
//    }
// };
// xhttp.open("GET", "actions/drgtodrp.php?g="+drog+"&p="+drap, true);
// xhttp.send();
// ------------------- code for use ajax via GET portocol ends



//- - - - - ajax for saving,deleting,updating,creating,etc ends



















function reset_the_priority_value_on_task()
{
  document.getElementById('radio_input_for_priority_task_high').style.backgroundColor = "transparent";
  document.getElementById('radio_input_for_priority_task_high').style.color = "red";
  document.getElementById('radio_input_for_priority_task_normal').style.backgroundColor = "transparent";
  document.getElementById('radio_input_for_priority_task_normal').style.color = "yellow";
  document.getElementById('radio_input_for_priority_task_low').style.backgroundColor = "transparent";
  document.getElementById('radio_input_for_priority_task_low').style.color = "green";
}

function check_priority_of_task()
{
  text_priority_on_task = "";
  color_priority_on_task = "";

  var xy1 = document.getElementById('radio_input_for_priority_task_high').style.backgroundColor;
  var xy2 = document.getElementById('radio_input_for_priority_task_normal').style.backgroundColor;
  var xy3 = document.getElementById('radio_input_for_priority_task_low').style.backgroundColor;
  if(xy1=="red")
  {
    text_priority_on_task = "High";
    color_priority_on_task = "red";
  }
  else if(xy2=="yellow")
  {
    text_priority_on_task = "Normal";
    color_priority_on_task = "yellow";
  }
  else if(xy3=="green")
  {
    text_priority_on_task = "Low";
    color_priority_on_task = "lightgreen";
  }
  else
  {
    text_priority_on_task = "unknow";
    color_priority_on_task = "white";
  }
}




function header_sticky_task()
{
  window.onscroll = function()
  {
    header_sticky_task_function();
  };
  var header = document.getElementById("title_day_task");
  var sticky = header.offsetTop;
  function header_sticky_task_function()
  {
    if (window.pageYOffset > sticky)
      header.classList.add("sticky");
    else
      header.classList.remove("sticky");
  }
}

function pageScroll_to_down_side(maxx)
{
  window.scrollBy(0, maxx);
}



function allowDrop(ev)
{
  ev.preventDefault();
}
// function success_item(inpt)
// {
//   ajax_done_task(inpt);
// }

// function del_item(inpt)
// {
//   ajax_delete_task(inpt);
// }

function check_childnods_respawn_box_task()
{
  if(document.getElementById('respawn_items_for_task').childNodes.length > 1)
      document.getElementById('button_remove_childerns_respawn_items_on_task').style.visibility = "visible";
  else
      document.getElementById('button_remove_childerns_respawn_items_on_task').style.visibility = "hidden";
}

function myconsole(drg,drp)
{
  if(drp == "box_tash_task" || drp=="photo_trash_task" || drp=="larg_trash_area")
      ajax_delete_task(drg); // del_item(drg);
  else if(drp == "box_success_task" || drp == "photo_success_task" || drp == "larg_success_area")
      ajax_done_task(drg); // success_item(drg);
  else
    repeat_to_refresh();
  check_childnods_respawn_box_task();
}

// function whats_happend(ev) //what item droped to where help
// {
//   var x = document.getElementById("box1").innerHTML;
//   var iwant = 'item.*.';
//   var iwant_size = iwant.length;
//   var str = x;
//   var str_size = str.length; //var n = str.search(iwant);
//   var t = str.substr(9,iwant_size);
//   var t_a = t.replace(' ','');
//   var t_b = t_a.replace('"','');
// }

function drag(ev)
{
  ev.dataTransfer.setData("text", ev.target.id);
  drg = ev.target.id;
}

function drop(ev)
{
  if(ev.target.id=="" || ev.target.id==" ")
    ev.preventDefault(); //cant drop to unknown
  else
  {
      var ddr = ev.target.id;
      ev.preventDefault();
      var check_destination = ddr.search("i");
      var convert_number_to_string = check_destination.toString();
      if(convert_number_to_string == "-1")
      {
        if(ddr == "box_tash_task" || ddr == "photo_trash_task" || ddr == "larg_trash_area")
        {
          drp =  ev.target.id;
          myconsole(drg,drp);
        }
        else if(ddr == "box_success_task" || ddr == "photo_success_task" || ddr == "larg_success_area")
        {
          drp =  ev.target.id;
          myconsole(drg,drp);
        }
        else
        {
          var data = ev.dataTransfer.getData("text");
          ev.target.appendChild(document.getElementById(data));
          drp =  ev.target.id;
          ajax_change_position_task(drg,drp);
          myconsole(drg,drp); // whats_happend(ev); what to where? help
        }
      }
      else
      {
        //cant drop to item
      }
  }
}
var priority_high_count=0;
var priority_normal_count=0;
var priority_low_count=0;
var priority_unknow_count=0;
function load_item_for_task(texty,descriptiony,colory,lasstt,to_box,priority)
{
  // texty = texty.replace("~q","\:"); texty = texty.replace("~q",":");
  // texty = texty.replace("~p","\+"); texty = texty.replace("~p","+");
  // texty = texty.replace("~a","\&"); texty = texty.replace("~a","&");
  // texty = texty.replace("~dc","\""); texty = texty.replace("~c","\'"); texty = texty.replace("~bs","\\");

  // descriptiony = descriptiony.replace("~q","\:"); descriptiony = descriptiony.replace("~q",":");
  // descriptiony = descriptiony.replace("~p","\+"); descriptiony = descriptiony.replace("~p","+");
  // descriptiony = descriptiony.replace("~a","\&"); descriptiony = descriptiony.replace("~a","&");
  // descriptiony = descriptiony.replace("~dc","\"");
  // descriptiony = descriptiony.replace("~c","\'");
  // descriptiony = descriptiony.replace("~bs","\\");
  texty = replace_special_charecters_before_load_for_stop_sqlinjention_and_better_load_items_on_task(texty);
  descriptiony = replace_special_charecters_before_load_for_stop_sqlinjention_and_better_load_items_on_task(descriptiony);

  texty = break_the_long_data_with_wbr(texty);
  descriptiony = break_the_long_data_with_wbr(descriptiony);

  var testy = document.createElement("div");
  testy.id = global_item_name+ lasstt;
  testy.style.width = '90%';
  testy.className = "class_for_tooltip_on_task";//noselect
  testy.style.marginLeft = "5%";
  testy.style.marginRight="5%";
  testy.style.marginTop="5px";
  testy.style.display="flex";
  testy.style.alignItems="center";
  testy.style.height= '100px';
  testy.style.backgroundColor= colory;
  testy.style.borderRadius = "5px";
  testy.draggable = true;
  testy.ondragstart=function(ev)
  {
    ev.dataTransfer.setData("text", ev.target.id);
    drg = ev.target.id;
  };
  switch (priority)
  {
    case 0: {document.getElementById(to_box).appendChild(testy);}break;
    case 1: {document.getElementById(to_box).appendChild(testy);}break;
    case 2: {document.getElementById(to_box).appendChild(testy);}break;
    case 3: {document.getElementById(to_box).prepend(testy);}break;
    default:
  }

      var item_title = document.createElement("p");
      item_title.innerHTML = texty;
      item_title.id = "item_title_"+lasstt;
      item_title.style.position= "relative";
      item_title.style.color="white";
      item_title.style.margin= "auto";
      document.getElementById(global_item_name+lasstt).appendChild(item_title);

      var div_for_tooltip = document.createElement("div");
      div_for_tooltip.style.backgroundColor = "transparent";
      div_for_tooltip.style.width = "99%";
      div_for_tooltip.style.height = "99%";
      div_for_tooltip.style.position= "absolute";
      div_for_tooltip.style.margin= "auto";
      div_for_tooltip.draggable = false;
      document.getElementById(global_item_name+lasstt).appendChild(div_for_tooltip);

      var tooltip_for_item = document.createElement("div");
      tooltip_for_item.className = "tooltip";
      tooltip_for_item.draggable = false;
      tooltip_for_item.innerHTML = "<b>Title:</b><br>"+texty +"<br><b><br>Description:</b><br>"+descriptiony+"<br><br><b>Priority:</b><br>";//<p style="color:red">Low</p>waw<br>no5
      var text_priority_local = "";
      var color_priority_local = "";
      switch (priority)
      {
        case 1: { text_priority_local = "Low"; color_priority_local = "lightgreen"; }break;
        case 2: { text_priority_local = "Normal"; color_priority_local = "yellow"; }break;
        case 3: { text_priority_local = "High"; color_priority_local = "red"; }break;
        default: { text_priority_local = "unknow"; color_priority_local = "white"; }break;
      }
      var span_for_tooltip_item_priority = document.createElement("span");
      span_for_tooltip_item_priority.innerText= text_priority_local;
      span_for_tooltip_item_priority.draggable = false;
      span_for_tooltip_item_priority.style.color = color_priority_local;
      tooltip_for_item.appendChild(span_for_tooltip_item_priority);
      div_for_tooltip.appendChild(tooltip_for_item);
      refresh_the_main_box_height(to_box);
      reset_the_priority_value_on_task();
}

// function anti_sqlinjec(inpuuuut)
// {
//   // inpuuuut = inpuuuut.replace("~ELEC~","SELECT"); inpuuuut = inpuuuut.replace("~elec~","select");
//   // inpuuuut = inpuuuut.replace("~PDAT~","UPDATE");
//   // inpuuuut = inpuuuut.replace("~ELET~","DELETE");
//   // inpuuuut = inpuuuut.replace("~REAT~","CREATE");
//   // inpuuuut = inpuuuut.replace("~NSER~","INSERT");
//   // inpuuuut = inpuuuut.replace("~RO~","DROP");
//   // inpuuuut = inpuuuut.replace("~LTE~","ALTER");
//   // inpuuuut = inpuuuut.replace("~RO~","FROM");
//   // inpuuuut = inpuuuut.replace("~N~","AND");
//   // inpuuuut = inpuuuut.replace("~R","OR");
//   // inpuuuut = inpuuuut.replace("~RDE~","ORDER");
//
//   // inpuuuut = inpuuuut.replace("UPDATE","~PDATE");//
//   // inpuuuut = inpuuuut.replace("DELETE","~ELETE");
//   // inpuuuut = inpuuuut.replace("CREATE","~REATE");
//   // inpuuuut = inpuuuut.replace("","");
// }
function replace_special_charecters_before_load_for_stop_sqlinjention_and_better_load_items_on_task(inpuuuut)
{
  inpuuuut = inpuuuut.replace("~p","\+");
  inpuuuut = inpuuuut.replace("~p","+");
  inpuuuut = inpuuuut.replace("~bs","\\");
  inpuuuut = inpuuuut.replace("~dc","\"");
  inpuuuut = inpuuuut.replace("~c","\'");
  inpuuuut = inpuuuut.replace("~a","\&");
  inpuuuut = inpuuuut.replace("~a","&");
  inpuuuut = inpuuuut.replace("~sq","\;");
  inpuuuut = inpuuuut.replace("~sq",";");
  inpuuuut = inpuuuut.replace("~q","\:");
  inpuuuut = inpuuuut.replace("~q",":");
  inpuuuut = inpuuuut.replace("~e","");
  // inpuuuut = inpuuuut.replace("~e","");
  return inpuuuut;
}

function clear_color_from_priority_and_task_color(colory)
{
  if(colory == '#474646' || colory == '#6ab722' || colory == '#c09906' || colory == "#b73622")
      document.getElementById('input_color_for_new_item_task').value = "#ffffff";
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
        default: colory = '#ffffff'; break;
      }
      document.getElementById('input_color_for_new_item_task').value = colory;
  }
}
function reset_color_after_create_new(status)
{
  colory = document.getElementById('input_color_for_new_item_task').value;
  if(status)
    if(colory == '#474646' || colory == '#6AB722' || colory == '#6ab722'|| colory == '#C09906' || colory == '#c09906' || colory == "#B73622" || colory == '#b73622'|| colory == "#FFFFFF" || colory == '#ffffff')
      document.getElementById('input_color_for_new_item_task').value = "#ffffff";
  else
  {
    var amount = document.getElementById('input_amount_for_new_tasks_on_task').value;
    amount = stopsql_injection_other_inputs(amount,1);
    if(amount <= 1)
      if(colory == '#474646' || colory == '#6AB722' || colory == '#6ab722'|| colory == '#C09906' || colory == '#c09906' || colory == "#B73622" || colory == '#b73622'|| colory == "#FFFFFF" || colory == '#ffffff')
        document.getElementById('input_color_for_new_item_task').value = "#ffffff";
  }
}

function break_the_long_data_with_wbr(data)
{
  var final_data = "";
  while(data.length>0)
  {
    var tmp_data = data.substr(0,1);
    data = data.substr(1,data.length);
    final_data += tmp_data + "<wbr>";
  }
  return final_data;
}


function clear_inputs_item_task()
{
  document.getElementById('input_text_for_new_item_task').value = '';
  document.getElementById('input_description_for_new_item_task').value = '';
  reset_the_priority_value_on_task();
  document.getElementById('input_color_for_new_item_task').value ='#ffffff';
  document.getElementById('input_amount_for_new_tasks_on_task').value = '1';
}

function create_item_task()
{
  var texty= document.getElementById('input_text_for_new_item_task').value;
  var descriptiony=document.getElementById('input_description_for_new_item_task').value;
  var colory=document.getElementById('input_color_for_new_item_task').value;
  var amounty = document.getElementById('input_amount_for_new_tasks_on_task').value;
  if(texty.length < 1)
      show_error_message("error","Please Fill title","9004");
  else if(texty.length > 59)
    show_error_message("error","The title task is more than 59 charecter","9006");
  else
  {
    texty = stopsql_injection_text(texty);
    // texty = texty.replace("\:","~q"); texty = texty.replace(":","~q");
    // texty = texty.replace("\+","~p"); texty = texty.replace("+","~p");
    // texty = texty.replace("\&","~a"); texty = texty.replace("&","~a");
    // texty = texty.replace("\"","~dc");
    // texty = texty.replace("\'","~c");
    // texty = texty.replace("\\","~bs");//bug
    // texty = texty.replace("\ ","~bs");

    descriptiony = stopsql_injection_text(descriptiony);
    // descriptiony = descriptiony.replace("\:","~q"); descriptiony = descriptiony.replace(":","~q");
    // descriptiony = descriptiony.replace("\+","~p"); descriptiony = descriptiony.replace("+","~p");
    // descriptiony = descriptiony.replace("\&","~a"); descriptiony = descriptiony.replace("&","~a");
    // descriptiony = descriptiony.replace("\"","~dc");
    // descriptiony = descriptiony.replace("\'","~c");
    // descriptiony = descriptiony.replace("\\","~bs");
    // descriptiony = descriptiony.replace("\ ","~bs");
    texty = texty+"~e";
    descriptiony = descriptiony+"~e";


    // amounty = amounty.replace(/[a-zA-Z \!\@\#\$\%\^\&\*\(\)\_\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, '');
    // amounty = Number(amounty);
    amounty = stopsql_injection_other_inputs(amounty,1);

    if(amounty.length <= 0)
      show_error_message("error","The amount can not be clear or less than zero!\nPlease select amount value","9007");
    else if(amounty > 99)
      show_error_message("error","The amount value can not be more than 99\nPlease select amount between 1-99","9008");
    else if(amounty >= 1 && amounty <= 99)
    {
          check_priority_of_task();
          switch (text_priority_on_task)
          {
            case "unknow": text_priority_on_task=0;break;
            case "Low": text_priority_on_task=1;break;
            case "Normal": text_priority_on_task=2;break;
            case "High": text_priority_on_task=3;break;
            default: text_priority_on_task=4;break;
          }
          pick_color_from_prioirty(colory,text_priority_on_task);
          colory=document.getElementById('input_color_for_new_item_task').value;
          var amountay = document.getElementById('input_amount_for_new_tasks_on_task').value;
          ajax_create_new_task(texty,descriptiony,colory,text_priority_on_task,amountay);
          switch (text_priority_on_task)
          {
            case 0: text_priority_on_task="unknow";break;
            case 1: text_priority_on_task="Low";break;
            case 2: text_priority_on_task="Normal";break;
            case 3: text_priority_on_task="High";break;
            default: text_priority_on_task=4;break;
          }
          // clear_color_from_priority_and_task_color(colory);
    }
    else
      show_error_message("error","Something wrong..","9009");
  }
}

function create_item_task_part1()
{
      var texty= document.getElementById('input_text_for_new_item_task').value;
      var descriptiony=document.getElementById('input_description_for_new_item_task').value;
      var colory=document.getElementById('input_color_for_new_item_task').value;
      texty = texty.replace("~e","");
      texty = break_the_long_data_with_wbr(texty);
      descriptiony = break_the_long_data_with_wbr(descriptiony);


      last_item_created = last_item_created+1;
      var btn = document.createElement("div");
      btn.id = global_item_name+ last_item_created;
      btn.style.width = '90%';
      btn.className = "class_for_tooltip_on_task";//noselect
      btn.style.marginLeft = "5%";
      btn.style.marginRight="5%";
      btn.style.marginTop="5px";
      btn.style.display="flex";
      btn.style.alignItems="center";
      btn.style.height= '100px';
      btn.style.backgroundColor= colory;
      btn.style.borderRadius = "5px";
      btn.draggable = true;
      btn.ondragstart=function(ev)
      {
        ev.dataTransfer.setData("text", ev.target.id);
        drg = ev.target.id;
      };
      document.getElementById("respawn_items_for_task").appendChild(btn);

      var item_title = document.createElement("p");
      item_title.innerHTML = texty;
      item_title.id = "item_title_"+last_item_created;
      item_title.style.position= "relative";
      item_title.style.color="white";
      item_title.style.margin= "auto";
      document.getElementById(global_item_name+last_item_created).appendChild(item_title);

      var div_for_tooltip = document.createElement("div");
      div_for_tooltip.style.backgroundColor = "transparent";
      div_for_tooltip.style.width = "99%";
      div_for_tooltip.style.height = "99%";
      div_for_tooltip.style.position= "absolute";
      div_for_tooltip.style.margin= "auto";
      div_for_tooltip.draggable = false;
      document.getElementById(global_item_name+last_item_created).appendChild(div_for_tooltip);

      var tooltip_for_item = document.createElement("div");
      tooltip_for_item.className = "tooltip";
      tooltip_for_item.draggable = false;
      tooltip_for_item.innerHTML = "<b>Title:</b><br>"+texty +"<br><b><br>Description:</b><br>"+descriptiony+"<br><br><b>Priority:</b><br>";//<p style="color:red">Low</p>waw<br>no5


      var span_for_tooltip_item_priority = document.createElement("span");
      span_for_tooltip_item_priority.innerText= text_priority_on_task;
      span_for_tooltip_item_priority.draggable = false;
      span_for_tooltip_item_priority.style.color = color_priority_on_task;
      tooltip_for_item.appendChild(span_for_tooltip_item_priority);
      div_for_tooltip.appendChild(tooltip_for_item);
      reset_color_after_create_new(false);
      reset_the_priority_value_on_task();
      repeat_to_refresh();
      check_childnods_respawn_box_task();
}







function load_item_for_task_switched_date(texty,descriptiony,colory,lastid,posi,priorityy)
{
  // texty = texty.replace("~q","\:"); texty = texty.replace("~q",":");
  // texty = texty.replace("~p","\+"); texty = texty.replace("~p","+");
  // texty = texty.replace("~a","\&"); texty = texty.replace("~a","&");
  // texty = texty.replace("~dc","\"");
  // texty = texty.replace("~c","\'");
  // texty = texty.replace("~bs","\\");
  //
  //
  // descriptiony = descriptiony.replace("~q","\:"); descriptiony = descriptiony.replace("~q",":");
  // descriptiony = descriptiony.replace("~p","\+"); descriptiony = descriptiony.replace("~p","+");
  // descriptiony = descriptiony.replace("~a","\&"); descriptiony = descriptiony.replace("~a","&");
  // descriptiony = descriptiony.replace("~dc","\"");
  // descriptiony = descriptiony.replace("~c","\'");
  // descriptiony = descriptiony.replace("~bs","\\");
  texty = replace_special_charecters_before_load_for_stop_sqlinjention_and_better_load_items_on_task(texty);
  descriptiony = replace_special_charecters_before_load_for_stop_sqlinjention_and_better_load_items_on_task(descriptiony);

      texty = break_the_long_data_with_wbr(texty);
      descriptiony = break_the_long_data_with_wbr(descriptiony);

      var btn = document.createElement("div");
      btn.id = global_item_name+ lastid;
      btn.style.width = '90%';
      btn.className = "class_for_tooltip_on_task";//noselect
      btn.style.marginLeft = "5%";
      btn.style.marginRight="5%";
      btn.style.marginTop="5px";
      btn.style.display="flex";
      btn.style.alignItems="center";
      btn.style.height= '100px';
      btn.style.backgroundColor= colory;
      btn.style.borderRadius = "5px";
      btn.draggable = true;
      btn.ondragstart=function(ev)
      {
        ev.dataTransfer.setData("text", ev.target.id);
        drg = ev.target.id;
      };
      document.getElementById(posi).appendChild(btn);

      var item_title = document.createElement("p");
      item_title.innerHTML = texty;
      item_title.id = "item_title_"+lastid;
      item_title.style.position= "relative";
      item_title.style.color="white";
      item_title.style.margin= "auto";
      document.getElementById(global_item_name+lastid).appendChild(item_title);

      var div_for_tooltip = document.createElement("div");
      div_for_tooltip.style.backgroundColor = "transparent";
      div_for_tooltip.style.width = "99%";
      div_for_tooltip.style.height = "99%";
      div_for_tooltip.style.position= "absolute";
      div_for_tooltip.style.margin= "auto";
      div_for_tooltip.draggable = false;
      document.getElementById(global_item_name+lastid).appendChild(div_for_tooltip);

      var tooltip_for_item = document.createElement("div");
      tooltip_for_item.className = "tooltip";
      tooltip_for_item.draggable = false;
      tooltip_for_item.innerHTML = "<b>Title:</b><br>"+texty +"<br><b><br>Description:</b><br>"+descriptiony+"<br><br><b>Priority:</b><br>";//<p style="color:red">Low</p>waw<br>no5


      var t_priority= "0";
      var c_priority="#ffffff";
      priorityy = Number(priorityy);
      switch(priorityy)
      {
        case 0:{t_priority = "unknow";c_priority = "white";}break;
        case 1:{t_priority = "Low";c_priority = "lightgreen";}break;
        case 2:{t_priority = "Normal";c_priority = "yellow";}break;
        case 3:{t_priority = "High";c_priority = "red";}break;
        default:{t_priority = "Error-";c_priority = "#ffffff";}break;
      }

      var span_for_tooltip_item_priority = document.createElement("span");
      span_for_tooltip_item_priority.innerText= t_priority;
      span_for_tooltip_item_priority.draggable = false;
      span_for_tooltip_item_priority.style.color = c_priority;
      tooltip_for_item.appendChild(span_for_tooltip_item_priority);
      div_for_tooltip.appendChild(tooltip_for_item);
      reset_the_priority_value_on_task();
      repeat_to_refresh();
}


function update_the_show_val_forfirst_time_on_calender_task(mytarget,printto)
{
  var valuuuuue = document.getElementById(mytarget).value;
  if(mytarget == "input_month_on_calender_task")
  {
    valuuuuue = Number(valuuuuue);
    switch (valuuuuue)
    {
      case 1: valuuuuue="January"; break;
      case 2: valuuuuue="February"; break;
      case 3: valuuuuue="March"; break;
      case 4: valuuuuue="April"; break;
      case 5: valuuuuue="May"; break;
      case 6: valuuuuue="June"; break;
      case 7: valuuuuue="July"; break;
      case 8: valuuuuue="August"; break;
      case 9: valuuuuue="September"; break;
      case 10: valuuuuue="October"; break;
      case 11: valuuuuue="November"; break;
      case 12: valuuuuue="December"; break;
      default: valuuuuue="uknonw";break;
    }
  }
  document.getElementById(printto).innerText = valuuuuue;
}
//tasks javascript codes ends
