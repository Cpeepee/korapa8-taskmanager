$(document).ready(function()
{
  function when_this_clicked_ops(item_id)
  {
      const idddstatuis = $(item_id).css("background-color")
      if(idddstatuis == "rgb(47, 49, 54)" || idddstatuis == "#2F3136" || idddstatuis == "rgba(255,48,48,0.5)" || idddstatuis=='transparent' || idddstatuis=='rgba(0, 0, 0, 0)')
      {
         $(item_id).css('background-color', 'rgba(255,48,48,0.5)');
         $(item_id).children().css('color', 'white');
      }
      else
      {
        $(item_id).css('background-color', 'transparent');
        $(item_id).children().css('color', '#FF6B6B');
      }
  }
  $('#calendar_number_on_target_1,#calendar_number_on_target_2,#calendar_number_on_target_3,#calendar_number_on_target_4,#calendar_number_on_target_5,#calendar_number_on_target_6,#calendar_number_on_target_7,#calendar_number_on_target_8,#calendar_number_on_target_9,#calendar_number_on_target_10,#calendar_number_on_target_11,#calendar_number_on_target_12,#calendar_number_on_target_13,#calendar_number_on_target_14,#calendar_number_on_target_15,#calendar_number_on_target_16,#calendar_number_on_target_17,#calendar_number_on_target_18,#calendar_number_on_target_19,#calendar_number_on_target_20,#calendar_number_on_target_21,#calendar_number_on_target_22,#calendar_number_on_target_22,#calendar_number_on_target_23,#calendar_number_on_target_24,#calendar_number_on_target_25,#calendar_number_on_target_26,#calendar_number_on_target_27,#calendar_number_on_target_28,#calendar_number_on_target_29,#calendar_number_on_target_30,#calendar_number_on_target_31').bind(
    {click: function() {when_this_clicked_ops(this);},mouseenter: function() {$(this).css("cursor","pointer");}});



    $("#previous-month-calendar-on-target").bind
    (
      {
        click: function()
        {
          const my_months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

          var current_month_text = $('#text-month-calendar-on-target').text();
          if(my_months.indexOf(current_month_text)<=0)
            $('#text-month-calendar-on-target').text(my_months[my_months.length-1]);
          else
            $('#text-month-calendar-on-target').text(''+my_months[my_months.indexOf(current_month_text)-1]);
        },
        mouseenter: function(){$(this).css("cursor","pointer");}
      }
    );
    $("#next-month-calendar-on-target").bind
    (
      {
        click: function()
        {
          const my_months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
          const current_month_text = $('#text-month-calendar-on-target').text();
          if(my_months.indexOf(current_month_text)>=my_months.length-1)
            $('#text-month-calendar-on-target').text(my_months[0]);
          else
            $('#text-month-calendar-on-target').text(''+my_months[my_months.indexOf(current_month_text)+1]);
        },
        mouseenter: function(){$(this).css("cursor","pointer");}
      }
    );
});
