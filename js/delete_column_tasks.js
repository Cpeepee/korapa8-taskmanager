// function notifyMe(message)
// {
//   // Let's check if the browser supports notifications
//   if (!("Notification" in window))
//   {
//     alert("This browser does not support desktop notification");
//   }
//
//   // Let's check whether notification permissions have already been granted
//   else if (Notification.permission === "granted")
//   {
//     // If it's okay let's create a notification
//     var notification = new Notification(message);
//   }
//
//   // Otherwise, we need to ask the user for permission
//   else if (Notification.permission !== "denied")
//   {
//     Notification.requestPermission().then(function (permission)
//     {
//       // If the user accepts, let's create a notification
//       if (permission === "granted")
//       {
//         var notification = new Notification(message);
//       }
//     });
//   }
//
//   // At last, if the user has denied notifications, and you
//   // want to be respectful there is no need to bother them any more.
// }
function count_know_the_childnodes_from_title_day_text(inputt)
{
  if(inputt == "respawn_items_for_task")
    inputt = "respawn_items_for_task";
  else
    inputt="box"+inputt;

    var my_numbers = [];
    var children = document.getElementById(inputt).children;
    for (var i = 0; i < children.length; i++)
        my_numbers.push(children[i].id);// var temp_id = children[i].id; ajax_delete_task(temp_id);
    ajax_delete_task(my_numbers,true);
    reset_the_page_scroll_by_LADT();
    if(inputt == "respawn_items_for_task")
      document.getElementById('button_remove_childerns_respawn_items_on_task').style.visibility = "hidden";
}


function delete_column_tasks_by_DCT(unput)
{
  (unput == "respawn_items_for_task") ?  unput = 100 : unput = Number(unput);
  switch (unput)
  {
    case 1: case 13:{count_know_the_childnodes_from_title_day_text(1);}break;
    case 2: case 14:{count_know_the_childnodes_from_title_day_text(2);}break;
    case 3: case 15:{count_know_the_childnodes_from_title_day_text(3);}break;
    case 4: case 16:{count_know_the_childnodes_from_title_day_text(4);}break;
    case 5: case 17:{count_know_the_childnodes_from_title_day_text(5);}break;
    case 6: case 18:{count_know_the_childnodes_from_title_day_text(6);}break;
    case 7: case 19:{count_know_the_childnodes_from_title_day_text(7);}break;
    case 8: case 20:{count_know_the_childnodes_from_title_day_text(8);}break;
    case 9: case 21:{count_know_the_childnodes_from_title_day_text(9);}break;
    case 10: case 22:{count_know_the_childnodes_from_title_day_text(10);}break;
    case 11: case 23:{count_know_the_childnodes_from_title_day_text(11);}break;
    case 12: case 24:{count_know_the_childnodes_from_title_day_text(12);}break;
    case 100:{count_know_the_childnodes_from_title_day_text('respawn_items_for_task');}break;
    default:{show_error_message('error',"the selected task for delete tasks is invaild\n please try again..",'9015');}break;
  }
}
