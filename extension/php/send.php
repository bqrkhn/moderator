<?php
session_start();
include("db_connect.php");
$id = $_POST["id"];
$value = $_POST["value"];
$name = $_SESSION['username'][0]['username'];
$sql = "UPDATE info SET scholar_score='$value',reviewed_by='$name' WHERE id='$id'";
$result = $con->query($sql);
	$con->close();
