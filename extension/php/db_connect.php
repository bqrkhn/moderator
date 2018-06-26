<?php
$servername = "localhost";
	$username = "root";
	$password = "";
	$database = "moderator";

	$con=mysqli_connect($servername,$username,$password,$database);
	// Check connection
	if (mysqli_connect_errno())
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  
function custom_echo($x, $length)
{
  if(strlen($x)<=$length)
  {
    echo $x;
  }
  else
  {
    $y=substr($x,0,$length) . '...';
    echo $y;
  }
}
?>

