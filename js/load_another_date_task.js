function remove_all_childs_from_boxs_by_LADT()
{
  for(var pe=1;pe<=12;pe++)
    $("#box"+pe).empty();
}
function remove_all_childs_from_respawnbox_by_LADT()
{
    $("#respawn_items_for_task").empty();
}
function reset_the_page_scroll_by_LADT()
{
    $("html, body").animate({ scrollTop: 0 }, "slow"); // $(window).scrollTop(0);
}
function change_the_title_text_task_by_LADT(am_or_pm)
{
  if(am_or_pm == "AM" || am_or_pm == "am")
    for(var hi=1;hi<=12;hi++)
      document.getElementById('title_day_task_number_'+hi).innerText = hi;
  else
  {
    var bye=13;
    for(var hi=1;hi<=12;hi++)
    {
        document.getElementById('title_day_task_number_'+hi).innerText = bye;
        bye++;
    }
  }

}
