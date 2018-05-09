<?php
	$servername = "localhost:3306";
	$username = "baqir";
	$password = "password";
	$database = "moderator";

	$con=mysqli_connect($servername,$username,$password,$database);
	// Check connection
	if (mysqli_connect_errno())
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
?>