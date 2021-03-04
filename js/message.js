//  -- - - -- messages starts
function show_success_message(title,description,code)
{
  // 8000 sucess add new task by ajax
  // 8001 success delete a task by ajax
  // 8002 success done task by ajax
  // 8003 success change position task by ajax
  // 8004 success create quick target and task
  // 8005 success load target details for delete_target
  document.getElementById('mouth_angry_gcm').style.visibility = 'hidden';
  document.getElementById('mouth_happy_gcm').style.visibility = 'visible';
  document.getElementById('global_center_message').style.visibility = 'visible';
  document.getElementById('larg_button_close_global_center_message_area').style.visibility = 'visible';

  document.getElementById('mouth_angry_gcm').style.visibility = 'hidden';
  document.getElementById('charecter_gcm').style.animation = 'move_happy_gcm 0.5s ease-in-out 0s infinite alternate';
  document.getElementById('charecter_show_gcm').style.animation = 'move_shadow_happy_gcm 0.5s ease-in-out 0s infinite alternate';
  document.getElementById('global_center_message').style.background = "linear-gradient(to bottom right, #6aaa4c 0%, #a3d38d 100%)";
  document.getElementById('text_button_gcm').style.color = '#6aaa4c';

  document.getElementById('title_gcm').innerText = title;
  var sucess_code = document.createElement("span");
  sucess_code.className = "code_gcm";
  sucess_code.innerText = code;
  document.getElementById('title_gcm').appendChild(sucess_code);
  document.getElementById('message_gcm').innerText = description;
}


function show_error_message(title,description,code)
{
  // 9000 error add new task by ajax and There was a problem creating the task
  // 9001 error delete task by ajax
  // 9002 error while done task by ajax
  // 9003 error while change position task by ajax
  // 9004 error while creating a new task and title box is clear by js
  // 9005 error No task found. If you want to make one
  // 9006 error the title task is more than 59 charecter
  // 9007 error the amount is clear or 0
  // 9008 The amount value can not be more than 99\nPlease select amount between 1-99
  // 9009 Something wrong.. when check the value amount for create new task!
  // 9010 the create quick target task on target page is problem
  // 9011 the error while create only target
  // 9012 while wanna create a quick target task, if selected days = 0 . show this 'you must select a day'
  // 9013 the month text for create a quick target task is not a correct,
  // 9014 this data is not standard because the data have not start and end tag ':_dasart_: and :_daend_:'
  // 9015 from file delete_column_tasks.js  when the selected box for delete column tasks have invaild value
  // 9016 from delete target while load target detail by ajax for delete target toolbox
  document.getElementById('mouth_angry_gcm').style.visibility = 'visible';
  document.getElementById('mouth_happy_gcm').style.visibility = 'hidden';
  document.getElementById('global_center_message').style.visibility = 'visible';
  document.getElementById('larg_button_close_global_center_message_area').style.visibility = 'visible';

  document.getElementById('charecter_gcm').style.animation = 'move_angry_gcm 1.5s ease-in-out 0s infinite alternate';
  document.getElementById('charecter_show_gcm').style.animation = 'move_shadow_angry_gcm 1.5s ease-in-out 0s infinite alternate';
  document.getElementById('global_center_message').style.background = "linear-gradient(to bottom left, #a83c4c 0%, #fcc5b3 100%)";

  document.getElementById('text_button_gcm').style.color = '#a83c4c';

  document.getElementById('title_gcm').innerText = title;
  var error_code = document.createElement("span");
  error_code.className = "code_gcm";
  error_code.innerText = code;
  document.getElementById('title_gcm').appendChild(error_code);
  document.getElementById('message_gcm').innerText = description;
}
//  -- - - -- messages ends
