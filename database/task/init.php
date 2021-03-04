<?php
require ('make_this_year.php');
ignore_user_abort(false);
// echo "create db<br>";
// create_database_for_this_year('2020');
// echo "created db<br>";
create_months_to_this_year('2021');
echo "all done.";
ignore_user_abort(true);
?>
