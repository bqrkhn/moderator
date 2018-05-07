<?php
	include("db_connect.php");
	$url = $_POST["url"];
	$score = $_POST["score"];
	$magnitude = $_POST["magnitude"];
	$sql = "INSERT INTO info (url, score, magnitude) VALUES ('$url', $score, $magnitude)";
	$result = $con->query($sql);
	echo $sql;
	$con->close();
?>