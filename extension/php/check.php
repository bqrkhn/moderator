<?php
	include("db_connect.php");
	$url = $_POST["url"];
	$sql = "SELECT * FROM info WHERE url='$url'";
	$result = $con->query($sql);
	$i=0;
    // output data of each row
    while($row = $result->fetch_assoc()) {
       $data = array('score' => $row['score'], 'magnitude' => $row['magnitude']);
	   echo json_encode($data);
	   $i++;
    }
	 if ($i==0){
		echo '0';
	}
	$con->close();
?>