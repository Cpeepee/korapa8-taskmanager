<?php
require ("header.php");
?>
<header>
  <script type="text/javascript" src="js/canvasjs.js"></script>
</header>
<?php
//--- pie chart data starts
$dataPoints_pie = array(
  array("label"=>"Oxygen", "symbol" => "O","y"=>46.6),
	array("label"=>"Silicon", "symbol" => "Si","y"=>27.7),
	array("label"=>"Aluminium", "symbol" => "Al","y"=>13.9),
	array("label"=>"Iron", "symbol" => "Fe","y"=>5),
	array("label"=>"Calcium", "symbol" => "Ca","y"=>3.6),
	array("label"=>"Sodium", "symbol" => "Na","y"=>2.6),
	array("label"=>"Magnesium", "symbol" => "Mg","y"=>2.1),
	array("label"=>"Others", "symbol" => "Others","y"=>1.5),
);
//--- pie chart data ends



//--- line chart data starts
$dataPoints_line = array(
	array("y" => 25, "label" => "Sunday"),
	array("y" => 15, "label" => "Monday"),
	array("y" => 25, "label" => "Tuesday"),
	array("y" => 0, "label" => "Wednesday"),
	array("y" => 10, "label" => "Thursday"),
	array("y" => 0, "label" => "Friday"),
	array("y" => 20, "label" => "Saturday")
);
//--- line chart data ends
?>
<script>
  load_chart_index(<?php echo json_encode($dataPoints_pie, JSON_NUMERIC_CHECK); ?>,<?php echo json_encode($dataPoints_line, JSON_NUMERIC_CHECK); ?>);
</script>
<h2 class="noselect zindex1 style_header_text"> Dashboard </h2>

<div id="targets_status" class="style_status_divs zindex1">
  <h3 class="noselect style_status_title">Targets</h3>
  <h5 class="noselect style_status_total">Total 22</h5>

  <img class="noselect style_status_star0" src="img/icons/star.png" alt="star"/>
  <img class="noselect style_status_star1" src="img/icons/star.png" alt="star">
  <img class="noselect style_status_star2" src="img/icons/star.png" alt="star">
  <img class="noselect style_status_star3" src="img/icons/star.png" alt="star">
  <img class="noselect style_status_star4" src="img/icons/star.png" alt="star">

  <li class="noselect style_status_li"><b>15</b>% of targets sucsess done.</li>
  <li class="noselect style_status_li"><b>10</b>% of targets breaks.</li>
  <li class="noselect style_status_li"><b>1</b>% targets has unknow.</li>
</div>


<div id="tasks_status" class="style_status_divs zindex1">
  <h3 class="noselect style_status_title">Tasks</h3>
  <h5 class="noselect style_status_total">Total 5</h5>
  <img class="noselect style_status_star0" src="img/icons/star.png" alt="star">
  <img class="noselect style_status_star1" src="img/icons/star.png" alt="star">
  <li class="noselect style_status_li"><b>20</b>% of tasks sucsess done.</li>
  <li class="noselect style_status_li"><b>30</b>% of tasks breaks.</li>
  <li class="noselect style_status_li"><b>40</b>% tasks has unknow.</li>
</div>


<div id="projects_status" class="style_status_divs zindex1">
  <h3 class="noselect style_status_title">Projects</h3>
  <h5 class="noselect style_status_total">Total 0</h5>
  <li class="noselect style_status_li"><b>100</b>% projects has unknow.</li>
</div>

<div id="chart_status">
  <div id="chartContainer_pie" class="noselect" style="position: absolute;height: 100%; width: 40%;"></div>
  <div id="chartContainer_line" class="noselect" style="position: absolute;right:0px;height: 100%; width: 50%;"></div>
</div>


<div id="base_five_of_the_most_important_targets_of_the_this_time_in_my_life">

</div>

<?php
include ("footer.php");
?>
