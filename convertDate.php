<?php
date_default_timezone_set('Iran');
$current_year_to_convert_jalali = date('Y');
$current_month_to_covnert_jalali = date('m');
$current_day_to_covenrt_jalali = date('j');
$current_week_to_convert_jalali = date('l');
$current_week_to_convert_jalali = date('l');
$current_hours_to_convert_jalali = date('H');
$current_minuts_to_convert_jalali = date('i');
$current_secunds_to_convert_jalali = date('s');
$current_pm_or_am_to_convert_jalali = date('A');


function convert_pm_am_to_jalali($enterhere)
{
  switch ($enterhere)
  {
    case 'PM': $enterhere="&#1576;&#1593;&#1583; &#1575;&#1586; &#1592;&#1607;&#1585;"; break;
    case 'AM': $enterhere="&#1589;&#1576;&#1581;"; break;
    default: $enterhere="error_am_pm";break;
  }
  return $enterhere;
}
function convert_number_to_jalali($nnumber)
{
  $nnumber = strval($nnumber);
  $nnumber0 = str_replace("0","a0",$nnumber);
  $nnumber1 = str_replace("1","a1",$nnumber0);
  $nnumber2 = str_replace("2","a2",$nnumber1);
  $nnumber3 = str_replace("3","a3",$nnumber2);
  $nnumber4 = str_replace("4","a4",$nnumber3);
  $nnumber5 = str_replace("5","a5",$nnumber4);
  $nnumber6 = str_replace("6","a6",$nnumber5);
  $nnumber7 = str_replace("7","a7",$nnumber6);
  $nnumber8 = str_replace("8","a8",$nnumber7);
  $nnumber9 = str_replace("9","a9",$nnumber8);
  $me = array("a0","a1","a2","a3","a4","a5","a6","a7","a8","a9");
  $to = array("&#1776;","&#1777;","&#1778;","&#1779;","&#1780;","&#1781;","&#1782;","&#1783;","&#1784;","&#1785;");
  $final_result = str_replace($me, $to, $nnumber9);
  return $final_result;
}

function convert_week_to_jalali($current_week_to_convert_jalal)
{
  switch ($current_week_to_convert_jalal)
  {
    case "Saturday": $current_week_to_convert_jalal= "&#1588;&#1606;&#1576;&#1607;";break;//shanbe
    case "Sunday": $current_week_to_convert_jalal= "&#1609;&#1705;&#1588;&#1606;&#1576;&#1607;";break;//1shanbe
    case "Monday": $current_week_to_convert_jalal= "&#1583;&#1608;&#1588;&#1606;&#1576;&#1607;";break;//2shanbe
    case "Tuesday": $current_week_to_convert_jalal= "&#1587;&#1607; &#1588;&#1606;&#1576;&#1607;";break;//3shanbe
    case "Wednesday": $current_week_to_convert_jalal= "&#1670;&#1607;&#1575;&#1585;&#1588;&#1606;&#1576;&#1607;";break;//4shanbe
    case "Thursday": $current_week_to_convert_jalal= "&#1662;&#1606;&#1580;&#1588;&#1606;&#1576;&#1607;";break;//5shanbe
    case "Friday": $current_week_to_convert_jalal= "&#1580;&#1605;&#1593;&#1607;";break;//jome
    default:
    {
      $current_week_to_convert_jalal = "error_week_convert= ".$current_week_to_convert_jalal . "ends";
    }
     break;
  }
  return $current_week_to_convert_jalal;
}

function convert_numberDay_to_textDate($cMonth)
{
  switch ($cMonth)
  {
    case '1': $cMonth="&#1601;&#1585;&#1608;&#1585;&#1583;&#1740;&#1606;"; break;//farvardin
    case '2': $cMonth="&#1575;&#1585;&#1583;&#1740;&#1576;&#1607;&#1588;&#1578;"; break;//Ordibehesht
    case '3': $cMonth="&#1582;&#1585;&#1583;&#1575;&#1583;"; break;//Khordad
    case '4': $cMonth="&#1578;&#1740;&#1585;"; break;//Tir
    case '5': $cMonth="&#1605;&#1585;&#1583;&#1575;&#1583;"; break;//Mordad
    case '6': $cMonth="&#1588;&#1607;&#1585;&#1740;&#1608;&#1585;"; break;//Shahrivar
    case '7': $cMonth="&#1605;&#1607;&#1585;"; break;//mehr
    case '8': $cMonth="&#1570;&#1576;&#1575;&#1606;"; break;//Aban
    case '9': $cMonth="&#1570;&#1584;&#1585;"; break;//Azar
    case '10': $cMonth="&#1583;&#1740;"; break;//Dey
    case '11': $cMonth="&#1659;&#1607;&#1605;&#1606;"; break;//Bahman
    case '12': $cMonth="&#1575;&#1587;&#1601;&#1606;&#1583;"; break;//Esfand
    default: $cMonth = "error_month_convert"; break;
  }
  return $cMonth;
}


function gregorian_to_jalali($gy, $gm, $gd,$week_jalali,$ch,$cm,$cs,$ctype)
{
  $g_d_m = array(0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334);
  $gy2 = ($gm > 2)? ($gy + 1) : $gy;
  $days = 355666 + (365 * $gy) + ((int)(($gy2 + 3) / 4)) - ((int)(($gy2 + 99) / 100)) + ((int)(($gy2 + 399) / 400)) + $gd + $g_d_m[$gm - 1];
  $jy = -1595 + (33 * ((int)($days / 12053)));
  $days %= 12053;
  $jy += 4 * ((int)($days / 1461));
  $days %= 1461;
  if ($days > 365)
  {
    $jy += (int)(($days - 1) / 365);
    $days = ($days - 1) % 365;
  }
  if ($days < 186)
  {
    $jm = 1 + (int)($days / 31);
    $jd = 1 + ($days % 31);
  } else
  {
    $jm = 7 + (int)(($days - 186) / 30);
    $jd = 1 + (($days - 186) % 30);
  }
  $jm = convert_numberDay_to_textDate($jm);
  $week_jalali = convert_week_to_jalali($week_jalali);
  $jy = convert_number_to_jalali($jy);
  $jd = convert_number_to_jalali($jd);
  $ch = convert_number_to_jalali($ch);
  $cm = convert_number_to_jalali($cm);
  $cs = convert_number_to_jalali($cs);
  $ctype = convert_pm_am_to_jalali($ctype);
  return array($week_jalali," ",$jd," ",$jm," ",$jy, " &#1587;&#1575;&#1593;&#1578; ",$ch,":",$cm,":",$cs," ",$ctype);
}

// function jalali_to_gregorian($jy, $jm, $jd)
// {
//   $jy += 1595;
//   $days = -355668 + (365 * $jy) + (((int)($jy / 33)) * 8) + ((int)((($jy % 33) + 3) / 4)) + $jd + (($jm < 7)? ($jm - 1) * 31 : (($jm - 7) * 30) + 186);
//   $gy = 400 * ((int)($days / 146097));
//   $days %= 146097;
//   if ($days > 36524) {
//     $gy += 100 * ((int)(--$days / 36524));
//     $days %= 36524;
//     if ($days >= 365) $days++;
//   }
//   $gy += 4 * ((int)($days / 1461));
//   $days %= 1461;
//   if ($days > 365) {
//     $gy += (int)(($days - 1) / 365);
//     $days = ($days - 1) % 365;
//   }
//   $gd = $days + 1;
//   $sal_a = array(0, 31, (($gy % 4 == 0 and $gy % 100 != 0) or ($gy % 400 == 0))?29:28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
//   for ($gm = 0; $gm < 13 and $gd > $sal_a[$gm]; $gm++) $gd -= $sal_a[$gm];
//   return array($gy, $gm, $gd);
// }
