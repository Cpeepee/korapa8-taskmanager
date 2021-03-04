$(document).ready(function()
{
  $('#search_to_delete_target_input').on("keyup", function(e)
  {
    if (e.keyCode == 13)
      alert('enter pressed');
  });
  
  //---------- menu starts
  $('.menu_style').bind(
  {
    // click: function()
    // {
    //   var wid_men = document.getElementById("menu").style.width;
    //   if(wid_men == '240px' || wid_men == '240')
    //   {
    //     $(this).css('width', '58px');
    //     $('.menu_item_text').css('visibility', 'hidden');
    //   }
    //   else
    //   {
    //     $(this).css('width', '240px');
    //     $('.menu_item_text').css('visibility', 'visible');
    //   }
    // },
     mouseenter: function()
     {
       $(this).css('width', '240px');
       $('.menu_item_text').css('visibility', 'visible');


     },
     mouseleave: function()
     {
       $(this).css('width', '58px');
       $('.menu_item_text').css('visibility', 'hidden');

     }
   });
  $('.menu_item').bind(
  {
     mouseenter: function()
     {
       $(this).css('cursor', 'pointer');
       $(this).css('background-color', '#215D91');
     },
     mouseleave: function()
     {
       $(this).css('background-color', '#1A1C1D');
     }
   });

   //---toolbox task starts

    $('#toolbar_task').bind(
    {
       mouseenter: function()
       {
         $(this).css('width', '400px');
         $('#box_main_toolbox_task').css('visibility','visible');
         $('#toolbar_task').css('height','500px');
         // $('#advice_for_tasks').css('bottom','581px'); //58.5%
         $('#calender_for_task').css('bottom','581px'); //58.5% leave the advice active 641px
         $('.line_toolbar_task').css('border-color','#63605c'); //58.5%
       },
       mouseleave: function()
       {
         $(this).css('width', '60px');
         $('#box_main_toolbox_task').css('visibility','hidden');
         $('#toolbar_task').css('height','60px');
         // $('#advice_for_tasks').css('bottom','140px');
         $('#calender_for_task').css('bottom','140px'); //58.5% leave the advice active 202px

         $('.line_toolbar_task').css('border-color','transparent'); //58.5%

       }
     });
     // $('#advice_for_tasks').bind(
     // {
     //    mouseenter: function()
     //    {
     //      $(this).css('width', '400px');
     //      $(this).css('height', '500px');
     //      $('#advice_for_tasks').css('bottom','140px');
     //      $('#base_advices_to_manage_for_task').css('visibility','visible');
     //      $('#advice_for_tasks').css('overflow','auto');
     //      $('#calender_for_task').css('bottom','641px'); //58.5%
     //
     //      $('.line_suggested_task').css('border-color','#63605c'); //58.5% B0A89C
     //    },
     //    mouseleave: function()
     //    {
     //      $(this).css('width', '60px');
     //      $(this).css('height', '60px');
     //      $('#advice_for_tasks').css('overflow','initial');
     //      $('#base_advices_to_manage_for_task').css('visibility','hidden');
     //      $('#calender_for_task').css('bottom','202px'); //58.5%
     //
     //      $('.line_suggested_task').css('border-color','transparent'); //58.5%
     //    }
     //  });


      $('#calender_for_task').bind(
      {
         mouseenter: function()
         {
           $(this).css('width', '400px');
           $(this).css('height', '500px');
           $('#calender_for_task').css('bottom','140px'); //was 202px
           $('#base_calender_for_task').css('visibility','visible');
           // $('#advice_for_tasks').css('overflow','auto');
           // $('#advice_for_tasks').css('bottom','641px'); //58.5%

           $('.line_calender_task').css('border-color','#63605c'); //58.5%
         },
         mouseleave: function()
         {
           $(this).css('width', '60px');
           $(this).css('height', '60px');
           $('#calender_for_task').css('overflow','initial');
           $('#base_calender_for_task').css('visibility','hidden');
           // $('#advice_for_tasks').css('bottom','202px'); //58.5%
           $('#calender_for_task').css('bottom','140px'); //58.5%

           $('.line_calender_task').css('border-color','transparent'); //58.5%


         }
       });
   //---toolbox task ends














//-------toolbox target starts
$('#toolbar_target').bind(
{
   mouseenter: function()
   {
     $(this).css('width', '400px');
     $('#box_main_toolbox_target').css('visibility','visible');
     $('#toolbar_target').css('height','750px');
     $('.line_toolbar_task').css('border-color','#63605c'); //58.5%
   },
   mouseleave: function()
   {
     $(this).css('width', '60px');
     $(this).css('height','60px');
     $('#box_main_toolbox_target').css('visibility','hidden');
     $('.line_toolbar_task').css('border-color','transparent'); //58.5%
   }
 });

 $('#toolbar_create_only_target').bind(
 {
    mouseenter: function()
    {
      $(this).css('width', '400px');
      $(this).css('height', '420px');
      $('#box_main_toolbox_only_target').css('visibility','visible');
      $('.line_toolbar_only_target').css('border-color','#63605c'); //58.5%
    },
    mouseleave: function()
    {
      $(this).css('width', '60px');
      $(this).css('height','60px');
      $(this).css('bottom','60px'); //140px
      $('#box_main_toolbox_only_target').css('visibility','hidden');
      $('.line_toolbar_only_target').css('border-color','transparent'); //58.5%
    }
  });



  $('#delete_the_target').bind(
  {
     mouseenter: function()
     {
       $(this).css('width', '400px');
       $(this).css('height', '420px');
       $('#box_main_toolbox_delete_target').css('visibility','visible');
       $('.line_toolbar_delete_target').css('border-color','#63605c'); //58.5%

     },
     mouseleave: function()
     {
       $(this).css('width', '60px');
       $(this).css('height','60px');
       $(this).css('bottom','120px'); //200px
       $('#box_main_toolbox_delete_target').css('visibility','hidden');
       $('.line_toolbar_delete_target').css('border-color','transparent'); //58.5%
     }
   });
//---toolbox target ends
















//on_calender_pluse and mines starts

//month
$('#pluse_input_month_on_calender_task').bind(
{
   click:function()
   {
      var las = document.getElementById('input_month_on_calender_task').value;
      if(las <= 11)
      {
        las++;
        document.getElementById('input_month_on_calender_task').value = las;
        on_update_input_for_calender_task('input_month_on_calender_task',las);
      }
   },
   mouseenter: function() {$(this).css('cursor', 'pointer');}
 });
 $('#mines_input_month_on_calender_task').bind(
 {
    click:function()
    {
       var las = document.getElementById('input_month_on_calender_task').value;
       if(las > 1 && las < 13)
       {
         las=las-1;
         document.getElementById('input_month_on_calender_task').value = las;
         on_update_input_for_calender_task('input_month_on_calender_task',las);
       }
    },
    mouseenter: function() {$(this).css('cursor', 'pointer');}
});



//day
$('#pluse_input_day_on_calender_task').bind(
{
   click:function()
   {
      var las = document.getElementById('input_day_on_calender_task').value;
      if(las <= 30)
      {
        las++;
        document.getElementById('input_day_on_calender_task').value = las;
        on_update_input_for_calender_task('input_day_on_calender_task',las);
      }
   },
   mouseenter: function() {$(this).css('cursor', 'pointer');}
 });
 $('#mines_input_day_on_calender_task').bind(
 {
    click:function()
    {
       var las = document.getElementById('input_day_on_calender_task').value;
       if(las > 1 && las < 32)
       {
         las=las-1;
         document.getElementById('input_day_on_calender_task').value = las;
         on_update_input_for_calender_task('input_day_on_calender_task',las);
       }
    },
    mouseenter: function() {$(this).css('cursor', 'pointer');}
});
//on_calender_pluse and mines ends







//special button_empty_priority_input_create_task starts
$('#button_empty_priority_input_create_task').bind(
{
   click:function() {reset_the_priority_value_on_task();}
});
//special button_empty_priority_input_create_task ends





//newtask pluse and minus on newtask for amount starts

$('.style_minus_amount_new_tasks_on_task').bind(
{
   click:function()
   {
      var las = document.getElementById('input_amount_for_new_tasks_on_task').value;
      las = las.replace(/[a-zA-Z \!\@\#\$\%\^\&\*\(\)\_\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, '');
      las = Number(las);
      if(las > 1 && las < 100)
      {
        las=las-1;
        document.getElementById('input_amount_for_new_tasks_on_task').value = las;
        $('.style_input_amount_for_new_tasks_on_task').css('border', '3px solid #2f3030');

      }
      else
      {
        $('.style_input_amount_for_new_tasks_on_task').css('border', '3px solid red');
      }
   },
   mouseenter: function() {$(this).css('cursor', 'pointer');}
});
$('.style_pluse_amount_new_tasks_on_task').bind(
{
   click:function()
   {
     var las = document.getElementById('input_amount_for_new_tasks_on_task').value;
     las = las.replace(/[a-zA-Z \!\@\#\$\%\^\&\*\(\)\_\+\[\]\-\=\,\.\<\>\?\\\'\"\;\:\{\}\`\~\/\|]/g, '');
     las = Number(las);
     if(las >= 1 && las <= 98)
     {
       las=las+1;
       document.getElementById('input_amount_for_new_tasks_on_task').value = las;
       $('.style_input_amount_for_new_tasks_on_task').css('border', '3px solid #2f3030');

     }
     else
     {
       $('.style_input_amount_for_new_tasks_on_task').css('border', '3px solid red');
     }
   },
   mouseenter: function() {$(this).css('cursor', 'pointer');}
});
//newtask pluse and minus on newtask for amount ends









//delete a row by clicking on title text 'day' on tasks starts


$('#title_day_task_number_1,#title_day_task_number_2,#title_day_task_number_3,#title_day_task_number_4,#title_day_task_number_5,#title_day_task_number_6,#title_day_task_number_7,#title_day_task_number_8,#title_day_task_number_9,#title_day_task_number_10,#title_day_task_number_11,#title_day_task_number_12').bind(
{
    click:function()
    {
      if (confirm('Are you sure to delete column '+$(this).text()+"?"))
      {
         delete_column_tasks_by_DCT($(this).text());
      }
   },
   mouseenter: function() {$(this).css('cursor', 'pointer');}
});


//respawn box
$('#button_remove_childerns_respawn_items_on_task').bind(
{
    click:function()
    {
      if (confirm('Are you sure to delete all tasks in spawn box?'))
      {
         delete_column_tasks_by_DCT("respawn_items_for_task");
      }
   },
   mouseenter: function() {$(this).css('cursor', 'pointer');}
});

//delete a row by clicking on title text 'day' on tasks ends








  //click location pages
$('#item_0').bind({click: function(){window.location = "index.php";}});
$('#item_1').bind({click: function(){window.location = "target.php";}});
$('#item_2').bind({click: function(){window.location = "task.php";}});
$('#item_logout').bind({click: function(){window.location = "logout.php";}});
  //---------- menu stops






//message GCM starts
$('#larg_button_close_global_center_message_area').bind({click: function()
  {
    $('#larg_button_close_global_center_message_area').css('visibility','hidden');
    $('#global_center_message').css('visibility','hidden');
    $('#mouth_angry_gcm').css('visibility','hidden');
    $('#mouth_happy_gcm').css('visibility','hidden');
  }});

  $('#button_gcm').bind
  (
    {
      mouseenter: function() {$(this).css('cursor', 'pointer');},
      click: function()
      {
          $('#larg_button_close_global_center_message_area').css('visibility','hidden');
          $('#global_center_message').css('visibility','hidden');
          $('#mouth_angry_gcm').css('visibility','hidden');
          $('#mouth_happy_gcm').css('visibility','hidden');
      }
    }
  );


  $('#close_button_gcm').bind({
    mouseenter: function() {$(this).css('cursor', 'pointer');},
    click: function()
    {
      $('#larg_button_close_global_center_message_area').css('visibility','hidden');
      $('#global_center_message').css('visibility','hidden');
      $('#mouth_angry_gcm').css('visibility','hidden');
      $('#mouth_happy_gcm').css('visibility','hidden');
    }});
//message GCM ends




  //---------- priority on task starts
  $('#radio_input_for_priority_task_high').bind(
  {
     mouseenter: function()
     {
       $(this).css('cursor', 'pointer');
     },
     click: function()
     {
       $(this).css('background-color', 'red');
       $(this).css('color', 'black');
       $('#radio_input_for_priority_task_normal').css('background-color', 'transparent');
       $('#radio_input_for_priority_task_normal').css('color', 'yellow');
       $('#radio_input_for_priority_task_low').css('background-color', 'transparent');
       $('#radio_input_for_priority_task_low').css('color', 'green');
     }
   });

   $('#radio_input_for_priority_task_normal').bind(
   {
      mouseenter: function()
      {
        $(this).css('cursor', 'pointer');
      },
      click: function()
      {
        $(this).css('background-color', 'yellow');
        $(this).css('color', 'black');
        $('#radio_input_for_priority_task_high').css('background-color', 'transparent');
        $('#radio_input_for_priority_task_high').css('color', 'red');
        $('#radio_input_for_priority_task_low').css('background-color', 'transparent');
        $('#radio_input_for_priority_task_low').css('color', 'green');
      }
    });



    $('#radio_input_for_priority_task_low').bind(
    {
       mouseenter: function()
       {
         $(this).css('cursor', 'pointer');
       },
       click: function()
       {
         $(this).css('background-color', 'green');
         $(this).css('color', 'black');
         $('#radio_input_for_priority_task_high').css('background-color', 'transparent');
         $('#radio_input_for_priority_task_high').css('color', 'red');
         $('#radio_input_for_priority_task_normal').css('background-color', 'transparent');
         $('#radio_input_for_priority_task_normal').css('color', 'yellow');
       }
     });

  //-------- priority on task ends

  //---------- target.php starts -> buttons create modify delete manage
  $('#button_target_0').bind({click: function()
    {
      $('.main_base_form').css('top', '60px');
      $('#delete_on_target').css('visibility', 'hidden');
      $('#create_modify_on_target').css('visibility', 'visible');
      //
      $(this).css('background-color', '#80C5D6');
      $(this).css('color', 'white');
      $('#button_target_1').css('background-color', 'transparent');
      $('#button_target_1').css('color', '#80C5D6');
      $('#button_target_2').css('background-color', 'transparent');
      $('#button_target_2').css('color', '#80C5D6');
      $("#task_name_for_create_modify_on_target").attr("placeholder", "new task");
    }});

    $('#button_target_1').bind({click: function()
      {
        $('.main_base_form').css('top', '60px');
        $('#create_modify_on_target').css('visibility', 'hidden');
        $('#delete_on_target').css('visibility', 'visible');
        //
        $(this).css('background-color', '#80C5D6');
        $(this).css('color', 'white');
        $('#button_target_0').css('background-color', 'transparent');
        $('#button_target_0').css('color', '#80C5D6');
        $('#button_target_2').css('background-color', 'transparent');
        $('#button_target_2').css('color', '#80C5D6');
        $("#task_name_for_delete_on_target").attr("placeholder", "enter task to delete");
    }});

      $('#button_target_2').bind({click: function()
        {
          $('.main_base_form').css('top', '60px');
          $('#delete_on_target').css('visibility', 'hidden');
          $('#create_modify_on_target').css('visibility', 'visible');
          //
          $(this).css('background-color', '#80C5D6');
          $(this).css('color', 'white');
          $('#button_target_0').css('background-color', 'transparent');
          $('#button_target_0').css('color', '#80C5D6');
          $('#button_target_1').css('background-color', 'transparent');
          $('#button_target_1').css('color', '#80C5D6');
          $("#task_name_for_create_modify_on_target").attr("placeholder", "to modify");
    }});

        $('#submit_button_done_on_target').click(function (e)
        {
          e.preventDefault();
          var taskname_entered = $('#task_name_for_create_modify_on_target').val();
          var task_min_day_entered = $('#slider_value_from').val();
          var task_max_day_entered = $('#slider_value_to').val();
          $.ajax
            ({
              type: "POST",
              url: "action.php",
              data:
              {
                "task_name": taskname_entered, "task_min": task_min_day_entered, "task_max": task_max_day_entered
              },
              success: function (data)
              {
                $('#alert_message').css('color', 'lightgreen');
                $('#alert_message').css('border-color', 'lightgreen');
                $("#text_title_alert").text("Success, ");
                $("#text_alert").text("the create/modify item is done.");
                $('.style_alert_message').css('visibility', 'visible');

              },
              error: function(xhr, status, error)
              {
                $("#text_title_alert").text("Error, ");
                $("#text_alert").text("the create/modify item is not success please try again.");
                $('#alert_message').css('color', '#f46666');
                $('#alert_message').css('border-color', '#f46666');
                $('.style_alert_message').css('visibility', 'visible');
                //console.log(xhr.responseText);
              }
            });
        });

        $('#submit_button_delete_on_target').click(function (e)
        {
          e.preventDefault();
          var name = $('#name').val();
          var email = $('#email').val();
          var message = $('#message').val();
          $.ajax
            ({
              type: "POST",
              url: "action_delete_to_target.php",
              data:
              {
                "name": name, "email": email, "message": message
              },
              success: function (data)
              {
                $('#alert_message').css('color', 'lightgreen');
                $('#alert_message').css('border-color', 'lightgreen');
                $("#text_title_alert").text("Success, ");
                $("#text_alert").text("the create/modify item is done.");
                $('.style_alert_message').css('visibility', 'visible');
              },
              error: function(xhr, status, error)
              {
                $("#text_title_alert").text("Error, ");
                $("#text_alert").text("the create/modify item is not success please try again.");
                $('#alert_message').css('color', '#f46666');
                $('#alert_message').css('border-color', '#f46666');
                $('.style_alert_message').css('visibility', 'visible');
              }
            });
        });
   //---------- target.php stops
});




function load_chart_index(x,y)
{
  window.onload = function ()
  {
    var chart_pie = new CanvasJS.Chart("chartContainer_pie", {
    	theme: "dark2",
      backgroundColor: "transparent",
    	animationEnabled: true,
    	title: {
    		text: ""
    	},
    	data: [{
    		type: "doughnut",
    		indexLabel: "{symbol} - {y}",
    		yValueFormatString: "#,##0.0\"%\"",
    		showInLegend: false,
    		legendText: "{label} : {y}",
    		dataPoints: x
    	}]
    });


  var chart_line = new CanvasJS.Chart("chartContainer_line", {
  	title: {
  		text: ""
  	},
    backgroundColor: "transparent",
    animationEnabled: true,

    theme: "dark1",
  	axisY: {
  		title: ""
  	},
  	data: [{
  		type: "line",
  		dataPoints:y
  	}]
  });

      chart_line.render();
      chart_pie.render();

  }
}




function load_chart_target(data_range_current_month,current_month)
{
      window.onload = function ()
      {
        var chart_rang_current_month = new CanvasJS.Chart("chartContainer_range_current_month",
        {
        	title:
          {
        		text: ""
        	},
        	axisY:
          {
        		title: current_month,
        		suffix: "",
        		logarithmic: false
        	},
          exportEnabled:true,
        	toolTip:
          {
        		shared: true,
        		reversed: true
        	},
        	theme: "dark1",
        	data:
          [
        		{
        			type: "rangeBar",
        			indexLabel: "",//"{y[#index]} sep",
              // toolTipContent: "<b>{label}</b",

        			toolTipContent: "<b>{label}</b>: {y[0]} " + current_month +" to {y[1]} " + current_month,
        			dataPoints: data_range_current_month
        		}
        	]
        });
      chart_rang_current_month.render();
    }
}


function slider_range_value_update()
{
  var slider_target_from = document.getElementById("slider_target_from"); 	var slider_target_to = document.getElementById("slider_target_to");
  var slider_value_from = document.getElementById("slider_value_from"); 		var slider_value_to = document.getElementById("slider_value_to");
  slider_value_from.innerHTML =" from " +slider_target_from.value + " :";		slider_value_to.innerHTML = "to " +slider_target_to.value + " :";
  slider_target_from.oninput = function(){slider_value_from.innerHTML = "from " + this.value + " :";}
  slider_target_to.oninput = function(){slider_value_to.innerHTML = "to " + this.value + " :";}
}


function regex_date_jaladi()
{
  var datex = document.getElementById("header_date").innerText;
  datex = datex.replace("[",'');
  datex = datex.replace("]",'');
  for(var co=1;co<=32;co++)
  {
    datex = datex.replace('"','');
    datex = datex.replace(',','');
  }
  document.getElementById("header_date").innerText = datex;
}
